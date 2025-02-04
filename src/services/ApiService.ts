import { PostInterface } from '../models/PostInterface';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class ApiService {
  static async getPosts(): Promise<PostInterface[]> {
    try {
      const response = await fetch(`${API_URL}/posts`);
      if (!response.ok) {
        throw new Error(`Błąd HTTP: ${response.status}`);
      }
      return (await response.json()) as PostInterface[];
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
      throw error;
    }
  }
}
