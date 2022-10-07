import styled from "@emotion/styled";

const Container = styled("div")`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Container;
