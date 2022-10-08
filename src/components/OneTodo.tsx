import { css, Theme } from "@emotion/react";
import { TodoWrapper } from "../ui";
import CheckBox from "../ui/CheckBox";
import { TodoResponse } from "../utils/interfaces";

const OneTodo = (todoData: TodoResponse) => {
  return (
    <div className="some" css={todostyle}>
      <TodoWrapper>
        <CheckBox type="checkbox" />
        <p>{todoData.todo}</p>
      </TodoWrapper>
      <button>삭제</button>
      <button>수정</button>
    </div>
  );
};

const todostyle = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  background-color: aliceblue;
  justify-content: center;
  align-items: flex-end;
`;

export default OneTodo;
