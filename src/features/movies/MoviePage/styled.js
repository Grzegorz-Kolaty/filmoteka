import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  margin: 0 auto;
  height: 770px;
  max-width: 1920px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 3);


  color: ${({ theme }) => theme.color.white};
  background-color: black;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  box-shadow: inset 0px 0px 100px 100px rgba(0, 0, 0, 1);

  @media (max-width: 900px) {
    padding: 56px 20px;
    height: 500px;
    font-size: 14px;
    box-shadow: inset 0px 0px 50px 50px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 480px) {
    padding: 0;
    height: 300px;
    font-size: 12px;
    box-shadow: inset 0px 0px 20px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const ItemsWrapper = styled.div`
  padding: 3%;
`;