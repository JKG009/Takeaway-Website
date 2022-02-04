import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
    background: #1C2826;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    height: 5%;
    width: 100vw;
    position: fixed;
    z-index: 1;
    border-bottom: 2px solid #E99C20;
    
    @media (min-width: 610px) {
        height: 6%;
    }
`

export const ListContainer = styled.ul`
    list-style: none;
    font-size: 1.2rem;
    padding: 0;
    color: #E99C20;
    display: flex;
    margin-left: 3rem;

    @media (min-width: 945px) {
        margin-left: 1rem;
    }
`

export const CompanyLogo = styled(Link)`
    font-family: 'Berkshire Swash', "Helvetica Neue", sans-serif;
    font-size: 1.8rem;
    text-align: center;
    padding: 0.2rem;
    position: relative;
    margin-right: 1rem;
    text-decoration: none;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        color: #E99C20;
    }

    @media (min-width: 610px) {
        font-size: 2.2rem;
        margin-right: 2rem;
    }

    @media (min-width: 945px) {
        font-size: 2.4rem;
        margin-right: 2.4rem;
        min-width: 250px;
    }
`

export const Icon = styled.span`
    position: relative;
    background-color: #E99C20;
    width: 2rem;
    height: 3px;
    display: inline-block;
    margin-top: 1rem;
    margin-left: 0.6em;
    
    &::before,
    &::after {
        content: "";
        background-color: #E99C20;
        width: 2rem;
        height: 3px;
        display: inline-block;
        position: absolute;
        left: 0;
    }
    &::before {
        transition: top 0.5s;
        top: -0.6rem;
    }
    &::after {
        transition: top 0.5s;
        top: 0.6rem;
    }

    @media (min-width: 610px) {
        margin-left: 1.4rem;
        width: 2.4rem;

        &::before,
        &::after {
            width: 2.4rem;
        }
        &::before {
            top: -0.8rem;
        }
        &::after {
            top: 0.8rem;
        }
    }
`

export const Hamburger = styled.label`
    cursor: pointer;
    text-align: center;
    padding: 0.5em;
    ${({navShow}) => navShow ? "visibility: hidden;" : null}

    &:hover ${Icon} {
        ::before {
            top: -0.8rem;
        }
        ::after {
            top: 0.8rem;
        }
    }

    @media (min-width: 610px) {
        &:hover ${Icon} {
        ::before {
            top: -1rem;
        }
        ::after {
            top: 1rem;
        }
    }
    }
`