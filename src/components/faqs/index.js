import React, { useState } from "react";
import { 
    Container,
    TitleContainer,
    Title,
    AccordianDiv,
    AccordianContainer,
    QuestionContainer,
    Question,
    Toggle,
    Answer,
    Text
} from "./styles/faqs"

export default function Faqs({children}) {
    return <Container>{children}</Container>
}

Faqs.TitleContainer = function FaqsTitleContainer({children, ...restProps}) {
    return <TitleContainer {...restProps}>{children}</TitleContainer>
}

Faqs.Title = function FaqsTitle({children}) {
    return <Title>{children}</Title>
}

Faqs.Answer = function FaqsAnswer({children, ...restProps}) {
    return <Answer {...restProps}>{children}</Answer>
}

Faqs.AccordianDiv = function FaqsAccordianDiv({children, ...restProps}) {
    return <AccordianDiv {...restProps}>{children}</AccordianDiv>
}

Faqs.AccordianContainer = function FaqsAccordianContainer( {faqData}) {
    const [active, setActive] = useState(false)
    const toggleActive = () => setActive(!active)
    const { question, answer } = faqData

    return (
        <AccordianContainer>
            <QuestionContainer onClick={toggleActive}>
                <Question>{question}</Question>
                <Toggle>{active ? "-" : "+"}</Toggle>
            </QuestionContainer>
            {/* {active && <Answer>{answer}</Answer>} */}
            <Answer active={active}>{answer}</Answer>
        </AccordianContainer>
    )
}

Faqs.Text = function FaqsText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}