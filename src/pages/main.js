import React, { useState, useEffect } from 'react'
import { Main, Navbar } from "../components"
import { FooterContainer } from "../container";
import { useDeviceWidthContext } from '../contexts/DeviceWidthContext';
import { articles } from "../data"
import menu from "../components/documents/menu.pdf"

export default function MainPage() {
    const [articleDisplayed, setArticleDisplayed] = useState(0)
    const [displayDetail, setDisplayDetail] = useState(false)
    const {isMediumDevice} = useDeviceWidthContext()

    const toggleDisplayDetails = () => {
        setDisplayDetail(!displayDetail)
    }

    const toggleDisplayDetailsOnClick = (i) => {
        setArticleDisplayed(i)
        setTimeout(() => {
            displayDetail === true && i !== articleDisplayed ? setArticleDisplayed(i) : setDisplayDetail(!displayDetail)
        }, 100)
    }

    const prevArticle = (e) => {
        setArticleDisplayed(articleDisplayed - 1)
        e.stopPropagation()
    }

    const nextArticle = (e) => {
        setArticleDisplayed(articleDisplayed + 1)
        e.stopPropagation()
    }

    const handleClick = (n) => {
        setArticleDisplayed(n)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!displayDetail) {
                if (articleDisplayed < 4) {
                    setArticleDisplayed(articleDisplayed + 1)
                } else {
                    setArticleDisplayed(0)
                }
            }
        }, 3000);
        return () => {
            clearInterval(interval)
        }
    }, [articleDisplayed, displayDetail])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Main>
            <Main.TitleContainer>
                <Main.Title>Golden Wok<span style={{display: "block"}}>Chinese Takeaway</span></Main.Title>
                <Main.Subtitle>South-East Asian cuisine <span style={{display: "block"}}>in the comfort of your own home</span></Main.Subtitle>
            </Main.TitleContainer>
            <Main.TextContainer display="grid">
                <Main.Text style={{borderBottom: "#1C2826 solid 1px"}
            }>
                    Welcome to the Golden Wok, here you will find details about us, our food, contact & location and any questions that you might have before ordering from us.
                </Main.Text>
                <Main.Text>
                    If you would like to try something new, below are some of our most popular dishes that our customers always order. <span style={{color: "#DF9216"}}>Click on the images to get more details.</span> 
                </Main.Text>
                <Main.Text gridColumnEnd={"span 2"}>Click <Navbar.Anchor href={menu} target="_blank" style={{padding: "0"}}>here</Navbar.Anchor> to see our full menu.</Main.Text>
            </Main.TextContainer>
            {isMediumDevice ? 
                <Main.GridContainer>
                    {articles.map((article, index) => 
                        <Main.Article key={index} onClick={() => toggleDisplayDetailsOnClick(index)} displayDetail={displayDetail} backgroundImg={article.background}>
                            {displayDetail && articleDisplayed === index && 
                                        <Main.ArticleDetailContainer>
                                            <Main.ArticleTitle>{article.title}</Main.ArticleTitle>
                                            <Main.ArticleDetails>{article.detail}</Main.ArticleDetails>
                                        </Main.ArticleDetailContainer>
                            }
                        </Main.Article>)}
                </Main.GridContainer> 
                : 
                <Main.GridContainer>
                    {articles.map((article, index) => 
                        articleDisplayed === index &&
                        (
                        <>
                            <Main.Article key={index} onClick={toggleDisplayDetails} displayDetail={displayDetail} backgroundImg={article.background}>
                                {displayDetail ? 
                                    <>
                                        <Main.ArticleTitle>{article.title}</Main.ArticleTitle>
                                        <Main.ArticleDetails>{article.detail}</Main.ArticleDetails>
                                    </>
                                    :
                                    <Main.CarouselButtonHolder>
                                        <Main.CarouselButton 
                                            onClick={prevArticle}
                                            disabled={articleDisplayed === 0}>
                                                &lt;
                                        </Main.CarouselButton>
                                        <Main.CarouselButton 
                                            onClick={nextArticle}
                                            disabled={articleDisplayed === 4}>
                                                &gt;
                                        </Main.CarouselButton>
                                    </Main.CarouselButtonHolder>}
                            </Main.Article>
                            <Main.CarouselDotContainer>
                                {articles.map((article, index) => 
                                    articleDisplayed === index ?
                                        <Main.CarouselDot className="active"
                                        key={index}></Main.CarouselDot>
                                        :
                                        <Main.CarouselDot key={index} onClick={() => handleClick(index)}></Main.CarouselDot>
                                )}
                            </Main.CarouselDotContainer>
                        </>
                        )
                    )}
                </Main.GridContainer>
            }
            <FooterContainer />
        </Main>
    )
}