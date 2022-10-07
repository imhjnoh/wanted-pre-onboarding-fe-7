import styled from "@emotion/styled";

const AuthInput = styled("input")`
  padding: 0.5rem;
  min-width: 5rem;
  max-width: 100%;
  font-size: 1rem;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.negative};
  background-color: ${({ theme }) => theme.colors.primary};
  /* border: 2px solid ${({ theme }) => theme.colors.negative}; */
`;

export default AuthInput;
