import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

client.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken && req.headers) {
    req.headers.authorization = "Bearer " + accessToken;
  }
  return req;
});

client.interceptors.response.use((res) => {
  return res;
});

export const todoApi = {
  signUp: (email: string, password: string) =>
    client.post("auth/signup", { email, password }),
  signIn: (email: string, password: string) =>
    client.post("auth/signin", { email, password }),
  createTodo: (todo: string) => client.post("todos", { todo }),
  getTodos: () => client.get("todos"),
  updateTodo: (id: number, todo: string, isCompleted: boolean) =>
    client.put(`todos/${id}`, { todo, isCompleted }),
  deleteTodo: (id: number) => client.delete(`todos/${id}`),
};
