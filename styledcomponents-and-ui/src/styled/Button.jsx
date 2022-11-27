import styled from "styled-components";

export const Button = styled.button`
    //CSS Syntax

    color: ${(props) => (props.theme === "light" ? "#fe7e6b"  : "#FEECE9")};
    background: ${(props) => (props.theme === "light" ? "#FEECE9"  : "#fe7e6b")};
    border:none;
    border-radius: 3px;
    padding: 18px;

    &:hover {
        box-shadow: -1px 2px 8px #fe7e6b;
    }

`;

export const Div = styled.div`
    display:flex;
    width:200px;
    height:200px;
    color: black;
    background-color: grey;
    justify-content: center;


    & > p {
        color:green;
    }

    & > p:hover {
        color:blue;
    }
`;

export const Form = styled.form`
    margin:auto;
    width:150px;
    height:150px;
    color: red;
    background-color: aliceblue;
    border: 0px ;

`;

export const Para = styled.h1`
    background-color:red;
    width:100%;
    height:100%;
    
`;