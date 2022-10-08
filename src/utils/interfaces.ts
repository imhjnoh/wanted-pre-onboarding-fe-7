export interface ApiError {
  statusCode: number;
  message: string;
  error: string;
}

export interface TodoResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
