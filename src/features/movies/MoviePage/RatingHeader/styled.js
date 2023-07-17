import { styled } from "styled-components";
import star from "../../../../components/images/star.svg";

export const Wrapper = styled.div`
  position: absolute;
  width: 126px;
  height: 75px;
  left: 276px;
  top: 732px;
`;

export const Star = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${star}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0%;
  right: -0.01%;
  top: 2.45%;
  bottom: 2.24%;
  background: #FCD420;
`;

export const Textbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  color: #FFFFFF;
`;

export const Rate = styled.span`
  font-weight: bold;
  color: #2B2B2B;
`;

export const Votes = styled.div`
  color: #FFFFFF;
`;

export const VotesLabel = styled.div`
  color: #FFFFFF;
`;
