import styled from "styled-components";

const Input = styled.input`
    font-family: 'Raleway', sans-serif;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;

    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 15px;

    &::placeholder {
        font-family: 'Raleway', sans-serif;
        background-color: white;
        color: black;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
    }
`;

export default Input;