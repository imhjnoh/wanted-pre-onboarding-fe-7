/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { useState } from "react";
import { BigOrangeButton, TodoInput, TodoWrapper } from "../ui";
import CheckBox from "../ui/CheckBox";
import { TodoResponse } from "../utils/interfaces";

interface TodoProps {
  todoData: TodoResponse;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: string, isCompleted: boolean) => void;
}

const OneTodo = ({ todoData, deleteTodo, updateTodo }: TodoProps) => {
  const [oneTodo, setOneTodo] = useState<TodoResponse>(todoData);
  const [modMode, setModMode] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todoData.todo);

  const updateTodoText = async () => {
    if (newTodo !== "") {
      if (modMode && newTodo !== oneTodo.todo) {
        setOneTodo({ ...oneTodo, todo: newTodo });
        await updateTodo(oneTodo.id, newTodo, oneTodo.isCompleted);
        setModMode(false);
      } else {
        setModMode(true);
      }
    } else {
      alert("내용을 입력해주세요!");
    }
  };

  return (
    <div className="some" css={todostyle}>
      <TodoWrapper isCompleted={oneTodo.isCompleted}>
        <CheckBox
          type="checkbox"
          checked={oneTodo.isCompleted}
          onChange={(e) => {
            setOneTodo({ ...oneTodo, isCompleted: e.target.checked });
            updateTodo(oneTodo.id, oneTodo.todo, e.target.checked);
          }}
        />
        {modMode ? (
          <TodoInput
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        ) : (
          <p>{oneTodo.todo}</p>
        )}
      </TodoWrapper>
      <div className="todobuttonWrapper">
        <BigOrangeButton onClick={updateTodoText}>
          {modMode ? "수정완료" : "수정"}
        </BigOrangeButton>
        {!modMode && (
          <BigOrangeButton onClick={() => deleteTodo(todoData.id)}>
            삭제
          </BigOrangeButton>
        )}
      </div>
    </div>
  );
};

const todostyle = (theme: Theme) => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.primary};
  height: 3rem;
  padding: 0;
  div {
    height: 100%;
  }
  .todobuttonWrapper {
    height: 100%;
    display: flex;
  }
  button {
    font-size: inherit;
    padding: 1rem;
    flex-shrink: 0;
  }
  input[type="checkbox"] {
    flex-shrink: 0;
  }
  input[type="text"] {
    padding: 0.5rem 0rem;
    width: 20rem;
  }
`;

export default OneTodo;
