//const BASE_URL = 'https://api.example.com';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function apiClient<T>(
  endpoint: string,
  method: string,
  data?: any
): Promise<T> {
  try {
    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      },
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const statusCode = response.status;
    let responseData: unknown;

    try {
      responseData = await response.json();
    } catch {
      responseData = null;
    }

    if (!response.ok) {
      let errorMessage = `Błąd ${statusCode}: ${response.statusText}`;

      if (
        responseData &&
        typeof responseData === 'object' &&
        'message' in responseData
      ) {
        errorMessage = String((responseData as { message: string }).message);
      }

      switch (statusCode) {
        case 400:
          throw new Error(`Błąd 400: Nieprawidłowe żądanie - ${errorMessage}`);
        case 401:
          throw new Error(`Błąd 401: Nieautoryzowany dostęp - ${errorMessage}`);
        case 403:
          throw new Error(`Błąd 403: Brak uprawnień - ${errorMessage}`);
        case 404:
          throw new Error(`Błąd 404: Zasób nie znaleziony - ${errorMessage}`);
        case 500:
          throw new Error(`Błąd 500: Błąd serwera - ${errorMessage}`);
        default:
          throw new Error(errorMessage);
      }
    }

    return responseData as T; // ✅ Rzutowanie na typ T
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('Nieznany błąd podczas komunikacji z API');
    }
  }
}

// Wrappery dla metod HTTP
export function get<T>(endpoint: string): Promise<T> {
  return apiClient<T>(endpoint, 'GET');
}

export function post<T>(endpoint: string, data: any): Promise<T> {
  return apiClient<T>(endpoint, 'POST', data);
}

export function put<T>(endpoint: string, data: any): Promise<T> {
  return apiClient<T>(endpoint, 'PUT', data);
}

export function del<T>(endpoint: string): Promise<T> {
  return apiClient<T>(endpoint, 'DELETE');
}
