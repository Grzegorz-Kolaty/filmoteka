import { styled } from "styled-components";
import notFound from "././../../../components/images/notFound.svg";

export const NotFound = styled.div`
  background-image: url("${notFound}");
  background-repeat: no-repeat;
  background-position: center;
  height: 508px;
  width: 668px;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 32px auto 0px auto;

  @media (max-width: 450px) {
    width: 100%;
    height: 300px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background: #e4e6f0;
  border: none;

  svg {
    width: 7px;
    height: 11px;
  }

  .svg-right {
    width: 7px;
    height: 11px;
    transform: rotate(180deg);
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  width: 118px;
`;
