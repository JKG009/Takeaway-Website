import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.nav`
    font-size: 1.6rem;
    background: #1C2826;
    color: #E99C20;
    height: 100vh;
    width: 100vw;
    text-align: center;
    flex-direction: column;   
    display: ${({navShow}) => navShow ? "flex" : "none"};
    position: fixed;
    z-index: 2;
    transition: transform 5s;
    opacity: 0.97;
    animation: fade_in .8s;

    @keyframes fade_in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.97;
        }
    }

    @media (min-width: 610px) {
        font-size: 2rem;
    }
`

export const Cross = styled.div`
    margin-top: 0.7rem;
    margin-left: 0.8rem;
    padding: 0.45rem 1rem;
    width: 1rem;
    cursor: pointer;
    transition: color 0.5s;

    :hover, :active {
        color: white;
    }

    @media (min-width: 610px) {
        margin-top: 0.8rem;
        margin-left: 0.9rem;
        padding: 0.45rem 1.5rem;
    }
`

export const ListContainer = styled.ul`
    list-style: none;
    height: 90%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ListItem = styled.li`
    padding: 1rem 2rem;
    transition: color 0.5s;
    color: ${({currentPage}) => currentPage && "white"};

    &:hover, &:active {
        color: white;
    }
    
    @media (min-width: 945px) {
        max-width: 100px;
    }
    `

export const StyledLink = styled(Link)`
    text-decoration: none;
    
    &:focus, &:visited, &:link {
        color: #E99C20;
    }
`

export const Anchor = styled.a`
    text-decoration: none;
    padding: 1rem 2rem;
    transition: color 0.5s;
    
    &:focus, &:visited, &:link, &:active {
        color: #E99C20;

        &:hover {
            color: white;
        }
    }

    @media (min-width: 945px) {
        max-width: 100px;
    }
`