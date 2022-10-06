import axios from "axios";

const client = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: {
    "content-type": "application/json",
  },
});

client.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token");
  if (accessToken && config.headers) {
    config.headers.authorization = "Bearer " + accessToken;
  }
  return config;
});

export const todoApi = {
  signUp: (email: string, password: string) => {
    client.post("auth/signup", { email, password });
  },
  signIn: (email: string, password: string) => {
    client.post("auth/signin", { email, password });
  },
  createTodo: (todo: string) => {
    client.post("todos", { todo });
  },
  getTodos: () => {
    client.get("todos");
  },
  updateTodo: (id: number, todo: string, isCompleted: boolean) => {
    client.put(`todos/${id}`, { todo, isCompleted });
  },
  deleteTodo: (id: number) => {
    client.delete(`todos/${id}`);
  },
};
