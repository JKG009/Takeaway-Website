import React from 'react'
import { 
    Container,
    CompanyTitle,
    CompanyContact
} from "./styles/footer"

export default function Footer() {
    return (
        <Container>
            <CompanyTitle>
                Golden Wok Chinese Takeaway
            </CompanyTitle>
            <CompanyContact>
                01634 723777
            </CompanyContact>
        </Container>
    )
}