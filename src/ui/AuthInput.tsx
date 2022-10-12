import styled from "@emotion/styled";

const AuthInput = styled("input")`
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  flex-shrink: 0;
  border-bottom: 5px solid ${({ theme }) => theme.colors.negative};
  background-color: ${({ theme }) => theme.colors.primary};
  /* border: 2px solid ${({ theme }) => theme.colors.negative}; */
`;

export default AuthInput;
