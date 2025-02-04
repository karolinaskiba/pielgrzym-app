import { get } from '../apiClient/apiClient'; // Import Twojego klienta API

export default class PostsService {
  static async getPosts<PostInterface>(): Promise<PostInterface> {
    return get<PostInterface>('/posts');
  }
}
