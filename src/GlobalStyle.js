import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

h3 {
  position: absolute;
width: 285px;
height: 43px;
left: 276px;
top: 166px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 120%;

display: flex;
align-items: center;
color: ${({ theme }) => theme.color.black};
@media (max-width: 767px) {
  position: absolute;
width: 143px;
height: 12px;
left: 16px;
top: 150px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 120%;

display: flex;
align-items: center;
color: ${({ theme }) => theme.color.black}
}
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Poppins', sans-serif;
  padding: 16px;
  background: ${({ theme }) => theme.color.whisper};
  color: ${({ theme }) => theme.color.black}
}
`;
