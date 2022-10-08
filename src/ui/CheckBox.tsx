import styled from "@emotion/styled";

const CheckBox = styled("input")`
  width: 1rem;
  height: calc(1rem + 5px);
  border-bottom: 5px solid ${({ theme }) => theme.colors.negative};
  background-color: white;
  border-radius: 0.2rem;
  &:checked {
    background-color: ${({ theme }) => theme.colors.positive};
    &::before {
      content: "*";
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: calc(1rem + 5px);
      position: absolute;
      width: inherit;
      height: calc(1rem);
      text-align: center;
      color: white;
    }
  }
`;

export default CheckBox;
