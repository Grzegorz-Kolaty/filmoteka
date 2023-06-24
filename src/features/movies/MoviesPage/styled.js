import { styled } from "styled-components";
import notFound from "././../../../components/images/notFound.svg"
import Loader from "./../../../components/images/loader.svg"

export const NotFound = styled.img`
    background-image: url("${notFound}");
    background-repeat: no-repeat;
    background-position: center;
    height: 400px;
    width: 400px;
    background-color: transparent;
    outline: none;
    border: none;
`;

export const Loading = styled.img`
    background-image: url("${Loader}");
    background-repeat: no-repeat;
    background-position: center;
    height: 400px;
    width: 400px;
    background-color: transparent;
    outline: none;
    border: none;
`;