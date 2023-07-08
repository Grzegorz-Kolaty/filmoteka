import { styled } from "styled-components";
import notFound from "././../../../components/images/notFound.svg";
import Loader from "./../../../components/images/loader.svg";

export const NotFound = styled.img`
  background-image: url("${notFound}");
  background-repeat: no-repeat;
  background-position: center;
  height: 508px;
  width: 668px;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: 32px;
  margin-left: 432px;
`;

export const Loading = styled.img`
  background-image: url("${Loader}");
  background-repeat: no-repeat;
  background-position: center;
  height: 91px;
  width: 91px;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: 32px;
  margin-left: 432px;
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
