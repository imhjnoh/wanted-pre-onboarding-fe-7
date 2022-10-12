/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import OneTodo from "../components/OneTodo";
import { TitleTypography, TodoInput, BigOrangeButton } from "../ui";
import { todoApi } from "../utils/apis";
import { TodoResponse } from "../utils/interfaces";

const Todo = () => {
  const [todolist, setTodolist] = useState<TodoResponse[]>([]);
  const isLogin = localStorage.getItem("token");
  const [newTodo, setNewTodo] = useState<string>("");

  const getTodolist = async () => {
    let res: AxiosResponse;
    res = await todoApi.getTodos();
    setTodolist(res.data);
    console.log(res.data);
  };

  const addTodo = async () => {
    const newTodoList = todolist;
    try {
      const res = await todoApi.createTodo(newTodo);
      const newdata: TodoResponse = res.data;
      console.log(newdata);
      setTodolist([...newTodoList, newdata]);
    } catch (error) {
      alert("문제가 발생했습니다.");
    }
  };

  const deleteTodo = async (id: number) => {
    const newTodoList = todolist;
    if (window.confirm("정말로 삭제할까요?")) {
      try {
        const res = await todoApi.deleteTodo(id);
        setTodolist(newTodoList.filter((x) => x.id !== id));
        alert("삭제가 완료되었습니다.");
      } catch (error) {
        alert("문제가 발생했습니다.");
      }
    }
  };

  const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
    try {
      await todoApi.updateTodo(id, todo, isCompleted);
    } catch (error) {
      alert("문제가 발생했습니다.");
    }
  };

  const signOut = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      await localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    try {
      getTodolist();
    } catch (e) {
      alert("문제가 발생했습니다.");
    }
  }, []);

  return (
    <div className="asd" css={todoContainer}>
      {!isLogin && <Navigate to="/" />}
      <TitleTypography>TODO LIST</TitleTypography>
      <button onClick={signOut}>로그아웃</button>
      <div
        css={css`
          display: flex;
          margin: 1rem 0;
          gap: 0.2rem;
          height: 3rem;
        `}
      >
        <TodoInput
          type={"text"}
          placeholder="오늘 할 일은..?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <BigOrangeButton>✚</BigOrangeButton>
      </div>
      <ul>
        {[...todolist].map((todo) => (
          <OneTodo
            todoData={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

const todoContainer = (theme: Theme) => css`
  width: 30rem;
  max-width: 100%;
`;

export default Todo;
