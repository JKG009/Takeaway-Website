import React, { useEffect } from 'react'
import { Faqs, Main } from "../components"
import MapContainer from "../components/map"
import { useDeviceWidthContext } from '../contexts/DeviceWidthContext'

export default function ContactPage() {
    const {isLargeDevice} = useDeviceWidthContext()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Faqs>
                <Faqs.TitleContainer background="url(/images/contact.jpg)" backgroundPosition = "50% 75%">
                    <Faqs.Title>Contact Us</Faqs.Title>
                </Faqs.TitleContainer>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Main.TextContainer style={{textAlign: "center", borderBottom: "2px #DF9216 solid"}} display="flex">
                        <div style={{minWidth: "50%"}}>
                            <Main.TextTitle>Location</Main.TextTitle>
                            <Main.Text>Golden Wok</Main.Text>
                            <Main.Text>82 High Street</Main.Text>
                            <Main.Text>Strood, Rochester</Main.Text>
                            <Main.Text>ME2 4AR</Main.Text>
                            <Main.Text>Phone: 01634 723777</Main.Text>
                        </div>
                        <div style={{minWidth: "50%"}}>
                            <Main.TextTitle>Opening Times</Main.TextTitle>
                            <Main.Text>7 days a week: 5pm - 10:30pm</Main.Text>
                            <Main.Text>Closed on Christmas & Boxing Day</Main.Text>
                        </div>
                    </Main.TextContainer>
                </div>
                <div style={{width: `${isLargeDevice ? "70%": "100%"}`, margin: "auto", maxWidth: "800px"}}>
                    <MapContainer />
                </div>
            </Faqs>
        </>
    )
}
