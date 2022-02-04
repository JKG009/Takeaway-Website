import styled from "styled-components";

export const Container = styled.div`
    background: #1C2826;
    color: white;
`

export const TitleContainer = styled.div`
    background-image: ${({background}) => background};
    background-size: cover;
    background-color: lightgray;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom: 2px #DF9216 solid;
    height: 50vh;
    position: relative;

    @media (min-width: 610px) {
        background-position: ${({backgroundPosition}) => backgroundPosition};
    }

    @media (min-width: 945px) {
        width: 70vw;
        max-width: 1000px;
        margin: auto;
    }
`

export const Title = styled.h3`
    position: absolute;
    bottom: 30%;
    color: white;
    margin-left: 1rem;
    text-shadow: 1px 1px gray, -1px -1px gray;
    line-height: 1.2rem;

    @media (min-width: 610px) {
        font-size: 1.8rem;
        margin-left: 1.8rem;
    }

    @media (min-width: 945px) {
        font-size: 2.2rem;
        margin-left: 2.4rem;
    }
`

export const AccordianDiv = styled.div`
    border-bottom: 2px #DF9216 solid;

    @media (min-width: 610px) {
        padding: 1rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr)
    }

    @media (min-width: 945px) {
        width: 70vw;
        max-width: 1000px;
        margin: auto;
    }
`

export const AccordianContainer = styled.div`
    margin: 1rem;

    @media (min-width: 610px) {
        margin: 0.4rem 1.8rem;
        align-items: center;
        justify-content: center;

        &:nth-child(odd) {
            margin-right: 0.4rem;
        }

        &:nth-child(even) {
            margin-left: 0.4rem;
        }
    }

    @media (min-width: 945px) {
        margin: 0.4rem 0;
    }
`

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: white 1px solid;
    cursor: pointer;

    &:hover {
        background: rgba(150, 150, 150, 0.1);
    }

    @media (min-width: 610px) {
        height: 65px;
        align-items: center;
        padding: 0 0.4rem;
    }
    
    @media (min-width: 945px) {
        font-size: 1.2rem;
    }
`

export const Question = styled.h4`
    margin: 0.6rem 0.4rem;
    line-height: 1.4rem;
    width: 85%;
`

export const Toggle = styled.div`
    margin: auto;
    margin-right: 0.8rem;
    font-weight: bold;
`

export const Answer = styled.p`
    border: white 1px solid;
    border-top: none;
    margin: 0;
    padding: 0.5rem;
    line-height: 1.6rem;
    background: rgba(150, 150, 150, 0.1);
    display: ${({active}) => active ? "block" : "none"};
    animation: fade_in 1.2s;
    
    @keyframes fade_in {
        0% {
            opacity: 0;
            transform: translateY(-20%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }

    @media (min-width: 610px) {
        padding: 0.8rem 0.75rem;
        line-height: 1.8rem;

    }
    @media (min-width: 945px) {
        font-size: 1.2rem;
    }
`

export const Text = styled.p`
    margin: 0;
    padding: 1rem;
    line-height: 1.6rem;
    border-bottom: 2px #DF9216 solid;

    @media (min-width: 610px) {
        font-size: 1.2rem;
        padding: 1rem 1.8rem;
        line-height: 1.8rem;
    }

    @media (min-width: 945px) {
        padding: 1.2rem 0;
        width: 70vw;
        max-width: 1000px;
        margin: auto;
    }
`