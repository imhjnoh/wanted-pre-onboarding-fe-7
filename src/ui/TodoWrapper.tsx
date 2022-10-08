import styled from "@emotion/styled";

const TodoWrapper = styled("div")`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export default TodoWrapper;
