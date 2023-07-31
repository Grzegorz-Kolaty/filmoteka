import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../components/images/error.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 180px;

  @media (max-width: 767px) {
    margin-top: 100px;
  }
  @media (max-width: 450px) {
    margin-top: 40px;
    padding: 16px;
  }
`;

export const Icon = styled(ErrorIcon)`
  margin-bottom: 38px;
  width: 120px;
  height: 120px;

  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 450px) {
    width: 60px;
    height: 60px;
  }
`;

export const Info = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 28px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const Message = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 24px 0;

  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none; 
  display: inline-block;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  font-family: 'Open Sans', sans-serif;
  
  &:hover {
    filter: brightness(130%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: 767px) {
    padding: 12px 16px;
    font-size: 12px;
  }
  @media (max-width: 450px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;
