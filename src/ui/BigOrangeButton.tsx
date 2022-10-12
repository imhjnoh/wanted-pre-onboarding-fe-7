import styled from "@emotion/styled";

const BigOrangeButton = styled("button")`
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 1rem;
`;

export default BigOrangeButton;
