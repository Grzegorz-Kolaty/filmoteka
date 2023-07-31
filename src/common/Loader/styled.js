import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  margin: 120px auto 24px;
  width: 91px;
  height: 91px;
  border: 12px solid ${({ theme }) => theme.color.snuff};
  border-right-color: ${({ theme }) => theme.color.black};
  border-radius: 50%;
  animation: LoadingSpinner 1.2s linear infinite;

    @keyframes LoadingSpinner {
    to {transform: rotate(360deg)}
    }

  

    @media (max-width:450px){
      margin: 24px auto 16px;
      width: 35px;
      height: 35px;
      border-width: 5px;
    }
`;