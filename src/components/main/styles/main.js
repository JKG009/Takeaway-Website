import styled from "styled-components";

export const MainContainer = styled.main`
    @media (min-width: 945px) {
        width: 70vw;
        max-width: 1000px;
        margin: auto;
    }
`
export const TitleContainer = styled.div`
    background-image: url(/images/kitchen.jpg);
    background-size: cover;
    background-position: center;
    background-color: lightgray;
    background-blend-mode: multiply;
    height: 70vh;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 2px #DF9216 solid;
    text-shadow: 2px 2px gray, -1px -1px gray;
    

    @media (min-width: 610px) {
        font-size: 1.4rem;
    }
`

export const Title = styled.h1`
    margin: 0;
    margin-left: 1rem;
    line-height: 2rem;

    @media (min-width: 610px) {
        line-height: 3.2rem;
        margin-left: 2rem;
    }
    @media (min-width: 945px) {
        line-height: 3.4rem;
    }
`

export const Subtitle = styled.p`
    margin: 0;
    text-align: right;
    font-weight: bold;
    margin-right: 1rem;
    line-height: 1.2rem;

    @media (min-width: 610px) {
        line-height: 1.8rem;
        margin-right: 2rem;
    }
    @media (min-width: 945px) {
        line-height: 2rem;
    }
`

export const TextContainer = styled.div`
    padding: 0.4rem 0;
    
    @media (min-width: 610px) {
        display: ${({display}) => display};
        font-size: 1.2rem;
        justify-content: space-around;
        max-height: 40vh;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
    
    @media (min-width: 945px) {
        min-height: 350px;
        align-items: center;
        width: 70vw;
        max-width: 1000px;
        margin: auto;
    }
`

export const TextTitle = styled.h3`
    margin: 0 1rem;
    text-decoration: underline;

    &:first-of-type {
        margin-top: 1rem;
    }
`

export const Text = styled.p`
    margin: 0.8rem 1rem 0.5rem;
    line-height: 1.6rem;

    &:last-of-type {
        margin-bottom: 1rem;
    }
    @media (min-width: 610px) {
        line-height: 1.8rem;
        text-align: center;
        width: ${({width}) => width};
        ${({gridColumnEnd}) => gridColumnEnd && `grid-column-end: ${gridColumnEnd}`};
    }
`

export const GridContainer = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    border-bottom: 2px #DF9216 solid;
    align-items: center;

    @media (min-width: 610px) {
        height: 70vh;
        display: grid;
        gap: 0.4rem;
        margin: 0 1rem;
        grid-template-areas:
        "rice roll"
        "ss dumplings"
        "noodles noodles";
        padding-bottom: 1rem;
        min-height: 500px;
    }
    
    @media (min-width: 945px) {
        flex-grow: 0;
        grid-template-areas:
        "rice rice roll noodles"
        "ss dumplings dumplings noodles";
    }
`

export const Article = styled.article`
    width: 90%;
    height: 100%;
    cursor: pointer;
    background-image: ${({backgroundImg}) => backgroundImg};
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    ${({displayDetail}) => displayDetail && "background-color: gray;"}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: background-color 1s;
    border-bottom: 2px #DF9216 solid;
    animation: switch 3s;
    
    @keyframes switch{
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    
    @media (min-width: 610px) {
        border-bottom: none;
        width: 100%;
        min-height: 100px;
        min-width: 125px;

        &:nth-child(1) {
            grid-area: rice;
        }
        &:nth-child(2) {
            grid-area: roll;
        }
        &:nth-child(3) {
            grid-area: ss;
        }
        &:nth-child(4) {
            grid-area: dumplings;
            background-position: bottom;
        }
        &:nth-child(5) {
            grid-area: noodles;
        }
    }

    @media (min-width: 945px) {
        min-width: 150px;
    }
`

export const ArticleDetailContainer = styled.div`
    @media (min-width: 610px) {
        /* background: lightblue; */
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;
        min-width: 190px;
        max-width: 440px;
        min-height: 160px;
        max-height: 210px;
    }

    @media (min-width: 945px) {
        width: 70%;
        height: 70%;
        max-width: 300px;
        max-height: 200px;
    }
`


export const ArticleTitle = styled.h3`
    padding: 0 1rem;
`

export const ArticleDetails = styled.p`
    text-align: right;
    padding: 0 1rem;
    line-height: 1.2rem;

    @media (min-width: 610px) {
        
    }
`

export const CarouselButtonHolder = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
`

export const CarouselButton = styled.button`
    border-radius: 15%;
    border: none;
    padding: 0.4rem 0.8rem;
    background: rgba(57, 62, 65, 0.6);
    color: white;
    font-size: 1.2rem;

    :disabled {
        visibility: hidden;
    }
`

export const CarouselDotContainer = styled.div`
    height: 10%;
    width: 40%;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const CarouselDot = styled.div`
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 100%;
    background: #CCCCCC;

    &.active {
        background: #DF9216;
    }
`