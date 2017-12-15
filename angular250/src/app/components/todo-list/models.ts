export interface TodoItem {
  id: string;
  description: string;
  completed: boolean;
}

export interface ApiError {
  status: number;
  message: string;
}
