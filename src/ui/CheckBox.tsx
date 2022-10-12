import styled from "@emotion/styled";

const size = "1.2rem";
const CheckBox = styled("input")`
  width: ${size};
  height: ${size};
  border: 5px solid ${({ theme }) => theme.colors.negative};
  /* background-color: white; */
  border-radius: 0rem;
  &:checked {
    background-color: ${({ theme }) => theme.colors.negative};
    &::before {
      content: "*";
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${size};
      text-align: center;
      position: absolute;
      width: calc(${size} - 10px);
      height: calc(${size} - 10px);
      text-align: center;
      color: white;
    }
  }
`;

export default CheckBox;
