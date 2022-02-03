import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 2;
    height: 100%;
    width: 100%;
    background: rgba(120, 120, 120, 0.5);
`

export const MessageDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: #1C2826;
    margin: auto;
    border-radius: 20px;
    border: solid 1px #E99C20;
`

export const Message = styled.h3`
    /* background: lightblue; */
    margin: 1rem 0;
    padding: 1rem 1.2rem;
`

export const Button = styled.button`
    margin: 1rem 0;
    margin-top: 0;
    padding: 0.6rem 1.4rem;
    border-radius: 20px;
    border: 0;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    :hover, :active {
        background: black;
        color: white;
    }
`