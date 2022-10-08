/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import OneTodo from "../components/OneTodo";
import { DefaultTheme } from "../styles/DefaultTheme";
import { TitleTypography, TodoWrapper, TodoInput } from "../ui";
import CheckBox from "../ui/CheckBox";
import { todoApi } from "../utils/apis";
import { TodoResponse } from "../utils/interfaces";

const Todo = () => {
  const [todolist, setTodolist] = useState<TodoResponse[]>([]);
  const isLogin = localStorage.getItem("token");

  const getTodolist = async () => {
    let res: AxiosResponse;
    res = await todoApi.getTodos();
    setTodolist(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    try {
      getTodolist();
    } catch {
      alert("문제가 발생했습니다.");
    }
  }, []);

  return (
    <div className="asd" css={todoContainer}>
      {!isLogin && <Navigate to="/" />}
      <TitleTypography>TODO LIST</TitleTypography>
      <div
        style={{
          display: "flex",
          margin: "1rem 0",
          gap: ".2rem",
        }}
      >
        <TodoInput type={"text"} placeholder="오늘 할 일은..?" />
        <button>✚</button>
      </div>
      <ul>
        {todolist?.map((todo) => (
          <OneTodo {...todo} />
        ))}
      </ul>
    </div>
  );
};

const todoContainer = (theme: Theme) => css`
  width: 30rem;
  max-width: 100%;
  button {
    font-size: 1rem;
    background-color: ${theme.colors.secondary};
    color: white;
    padding: 1rem;
  }
`;

export default Todo;
