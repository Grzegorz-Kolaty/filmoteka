import styled from "styled-components";

export default styled.input`
  height: 48px;
  line-height: 100%;
  font-size: 16px;
  width: 253px;
  border-radius: 33px;
  margin-top: 5px;
  padding-left: 20px;
  overflow: overlay;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
  }
`;
