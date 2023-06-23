import styled from "styled-components";


export default styled.input`
  height: 40px;
  line-height: 150%;
  font-size: 16px;
  width: 300px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 0.8;
  flex-grow: 0.8;
  outline: none;
  padding: 12px 0px;
  border-radius: 33px;
  margin-top:22px;
  color: ${({ theme }) => theme.color.white};
`;


