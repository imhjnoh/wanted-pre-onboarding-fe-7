import styled from "@emotion/styled";

const TodoInput = styled("input")`
  width: 100%;
  font-size: inherit;
  padding: 1rem;
  border: 2px dashed ${({ theme }) => theme.colors.negative};
`;

export default TodoInput;
