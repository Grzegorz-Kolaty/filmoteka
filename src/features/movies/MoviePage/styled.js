import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  padding: 56px 267px;
  height: 770px;
  color: ${({ theme }) => theme.color.white};
  background-color: black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* Dostosowanie rozmiaru tła do rozdzielczości ekranu */
  box-shadow: inset 0px 0px 100px 100px rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    /* Dostosuj style dla ekranów o szerokości mniejszej lub równej 768px */
    padding: 56px 20px;
    height: 500px;
    font-size: 14px;
    box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 480px) {
    /* Dostosuj style dla ekranów o szerokości mniejszej lub równej 480px */
    padding: 40px 10px;
    height: 300px;
    font-size: 12px;
    box-shadow: inset 0px 0px 20px 20px rgba(0, 0, 0, 0.3);
  }
`;
