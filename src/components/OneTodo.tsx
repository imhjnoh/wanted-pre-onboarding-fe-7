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
  const [modMode, setModMode] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>({ ...todoData }.todo);

  const updateTodoText = async () => {
    if (modMode) {
      if (newTodo !== "" && newTodo !== todoData.todo) {
        await updateTodo(todoData.id, newTodo, todoData.isCompleted);
        setModMode(false);
      } else {
        setModMode(false);
      }
    } else {
      setModMode(true);
    }
  };

  return (
    <div className="some" css={todostyle}>
      <TodoWrapper isCompleted={todoData.isCompleted}>
        <CheckBox
          type="checkbox"
          checked={todoData.isCompleted}
          onChange={(e) => {
            updateTodo(todoData.id, todoData.todo, e.target.checked);
          }}
        />
        {modMode ? (
          <TodoInput
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            ref={(c) => c?.focus()}
          />
        ) : (
          <p>{todoData.todo}</p>
        )}
      </TodoWrapper>
      <div className="todobuttonWrapper">
        <BigOrangeButton onClick={updateTodoText}>
          {modMode ? "제출" : "수정"}
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
  }
`;

export default OneTodo;
