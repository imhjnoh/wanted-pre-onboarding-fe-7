import styled from "@emotion/styled";

const TodoInput = styled("input")`
  width: 100%;
  font-size: inherit;
  border: 2px dashed ${({ theme }) => theme.colors.negative};
  padding-left: 1rem;
`;

export default TodoInput;
