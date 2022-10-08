import styled from "@emotion/styled";

const TitleTypography = styled("h1")`
  color: ${(props) => props.theme.colors.primary};
  max-width: 100%;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-shadow: 0 5px 0 ${({ theme }) => theme.colors.negative};
`;

export default TitleTypography;
