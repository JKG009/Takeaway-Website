import React, { useEffect } from 'react'
import { Faqs } from '../components'
import { FooterContainer } from '../container'
import { faqsData } from '../data'

export default function FaqsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Faqs>
                <Faqs.TitleContainer background="url(/images/delivery.jpg)" backgroundPosition = "50% 35%">
                    <Faqs.Title>
                        Frequently Asked Questions
                    </Faqs.Title>
                </Faqs.TitleContainer>
                <Faqs.AccordianDiv>
                    {faqsData.map(faq => (
                        <Faqs.AccordianContainer key={faq.id} faqData={faq}/>
                    ))}
                </Faqs.AccordianDiv>
                <Faqs.Text >If you have any other questions or feedback on anything, please do not hesitiate to come in or contact us via telephone for a quick and friendly chat. We would love to hear from you and are always looking for ways to improve our products and service.</Faqs.Text>
            </Faqs>
            <Faqs.TitleContainer 
                background="url(/images/question.jpg)" />
        </>
    )
}
