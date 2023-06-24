import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 30px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Item = styled.li`
    padding: 30px;
    height: 200px;
    width: 150px;
    border-radius: 5px;
    border: 2px solid gray;
`;