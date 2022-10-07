import styled from "@emotion/styled";

const AuthButton = styled("button")`
  padding: 0.5rem;
  min-width: 5rem;
  max-width: 100%;
  font-size: 1rem;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  outline: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.negative};
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
  margin-top: 0;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    border-bottom: none;
  }
`;

export default AuthButton;
