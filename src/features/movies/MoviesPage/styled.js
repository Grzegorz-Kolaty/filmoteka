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
