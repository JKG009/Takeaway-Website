import {
    MainContainer,
    TitleContainer,
    Title,
    Subtitle,
    TextContainer,
    TextTitle,
    Text, 
    GridContainer,
    Article,
    ArticleDetailContainer,
    ArticleTitle,
    ArticleDetails,
    CarouselButtonHolder,
    CarouselButton,
    CarouselDotContainer,
    CarouselDot
} from "./styles/main"

export default function Main({children}) {
    return <MainContainer >{children}</MainContainer>
}

Main.TitleContainer = function MainTitleContainer({children, ...restProps}) {
    return <TitleContainer {...restProps}>{children}</TitleContainer>
}

Main.Title = function MainTitle({children}) {
    return <Title>{children}</Title>
}

Main.Subtitle = function MainSubtitle({children}) {
    return <Subtitle>{children}</Subtitle>
}

Main.TextContainer = function MainTextContainer({children, ...restProps}) {
    return <TextContainer {...restProps}>{children}</TextContainer>
}

Main.TextTitle = function MainTextTitle({children}) {
    return <TextTitle>{children}</TextTitle>
}

Main.Text = function MainText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Main.GridContainer = function MainGridContainer({children, ...restProps}) {
    return <GridContainer>{children}</GridContainer>
}

Main.Article = function MainArticle({children, backgroundImg, ...restProps}) {
    return <Article backgroundImg={backgroundImg} {...restProps}>{children}</Article>
}

Main.ArticleDetailContainer = function MainArticleDetailContainer({children, ...restProps}) {
    return <ArticleDetailContainer {...restProps}>{children}</ArticleDetailContainer>
}

Main.ArticleTitle = function MainArticleTitle({children}) {
    return <ArticleTitle>{children}</ArticleTitle>
}

Main.ArticleDetails = function MainArticleDetails({children}) {
    return <ArticleDetails>{children}</ArticleDetails>
}

Main.CarouselButtonHolder = function MainCarouselButtonHolder({children}) {
    return <CarouselButtonHolder>{children}</CarouselButtonHolder>
}

Main.CarouselButton = function MainCarouselButton({children, ...restProps}) {
    return <CarouselButton {...restProps}>{children}</CarouselButton>
}

Main.CarouselDotContainer = function MainCarouselDotContainer({children}) {
    return <CarouselDotContainer>{children}</CarouselDotContainer>
}

Main.CarouselDot = function MainCarouselDot({...restProps}) {
    return <CarouselDot {...restProps}></CarouselDot>
}