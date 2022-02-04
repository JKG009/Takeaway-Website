import React, { useEffect } from 'react'
import { Faqs } from "../components"
import { FooterContainer } from '../container'

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Faqs>
                <Faqs.TitleContainer background="url(/images/ingredient.jpg)">
                    <Faqs.Title>About Us</Faqs.Title>
                </Faqs.TitleContainer>
                <Faqs.Text style={{border: "none", paddingBottom: "0", paddingTop: "2rem"}}>
                    At The Golden Wok, we order natural, high-quality ingredients weekly to ensure our product's freshness. Our ingredients are prepared on the day before being used in our dishes to our customer's exact order.
                </Faqs.Text>
                <Faqs.Text style={{border: "none", paddingBottom: "0"}}>
                    Our aim is to ensure that the food we prepare are of the highest quality and that it reaches our customers in a timely manner, hot and ready-to-eat, exactly how they like it.
                </Faqs.Text>
                <Faqs.Text style={{border: "none", paddingBottom: "0"}}>
                    Our head chef is an expert in his field. He developed his extensive skills from over 20years of cooking, learning in different establishments both in Asia and England. He personally ensure that all the dishes prepared by our cooks are of the highest quality.
                </Faqs.Text>
                <Faqs.Text style={{paddingBottom: "2rem"}}>
                    Please feel free to come in to order and watch as your food gets prepared through our open kitchen.
                </Faqs.Text>
            </Faqs>
            <Faqs.TitleContainer background="url(/images/spices.jpg)" />
            <FooterContainer />
        </>
    )
}
