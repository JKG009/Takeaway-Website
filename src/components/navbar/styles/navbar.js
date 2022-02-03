import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.nav`
    background: #1C2826;
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
`

export const Cross = styled.div`
    margin-top: 0.6rem;
    margin-left: 0.65rem;
    padding: 0.45rem;
    width: 1em;
    font-size: 1.6rem;
    cursor: pointer;
    color: #E99C20;
    /* transition: all 2s; */

    :hover, :active {
        color: white;
    }

    @media (min-width: 610px) {
        font-size: 2.4rem;
        margin-top: 1rem;
    }
`

export const ListContainer = styled.ul`
    list-style: none;
    height: 90%;
    padding: 0;
    color: #E99C20;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.6rem;
    
    @media (min-width: 610px) {
        font-size: 2rem;
    }
`

export const ListItem = styled.li`
    padding: 1rem 2rem;
    transition: color 0.5s;
    
    :hover, :active {
        color: white;
    }
    
    @media (min-width: 945px) {
        max-width: 100px;
        font-size: 1.6rem;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        color: #E99C20;
    }

    @media (min-width: 945px) {
        :hover {
            color: white;
        }
    }
`

export const Anchor = styled.a`
    text-decoration: none;
    padding: 1rem 2rem;
    transition: color 0.5s;
    
    &:focus, &:visited, &:link, &:active {
        color: #E99C20;

        :hover {
            color: white;
        }
    }

    @media (min-width: 945px) {
        max-width: 100px;
        font-size: 1.6rem;
    }
`