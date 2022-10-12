import styled from "@emotion/styled";

interface TodoWrapperProps {
  isCompleted: boolean;
}

const TodoWrapper = styled("div")<TodoWrapperProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  text-decoration: ${(props) => props.isCompleted && "line-through"};
  color: ${(props) => props.isCompleted && "#cbcbcb"};
`;

export default TodoWrapper;
