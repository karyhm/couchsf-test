export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  friends?: string[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  created: string;
}
