import { css } from "@emotion/react";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
    font-family: "DungGeunMo";
  }
  ul,
  li {
    list-style: none;
    cursor: default;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  a,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
  img {
    border: 0;
    vertical-align: middle;
  }
  html {
    font-size: 20px;
    @media (max-width: 1280px) {
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  select,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  body {
    font-size: 1rem;
    padding: 0;
    font-family: "DungGeunMo";
  }
  h1,
  h2,
  h3,
  h4 {
    cursor: default;
  }
  p,
  span {
    cursor: default;
  }
  button {
    cursor: pointer;
    padding: 0.2rem;
    border: none;
  }
  input {
    border: none;
    background-color: transparent;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  // 기본
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  // 500
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff")
      format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  // 700
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
      format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "DungGeunMo";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
