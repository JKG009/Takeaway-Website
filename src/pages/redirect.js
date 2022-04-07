import React from 'react'
import { Faqs } from "../components"

export default function RedirectPage() {
  return (
    <Faqs>
      <Faqs.TitleContainer style={{ background: "none", borderBottom:"none" }}>
        <Faqs.Title>404 Error; Page not found</Faqs.Title>
      </Faqs.TitleContainer>
        <Faqs.Text style={{paddingBottom: "20vh"}}>Use the navigation bar to go somewhere else or contact us directly to find what you're looking for.
        </Faqs.Text>
    </Faqs>
  );
}
