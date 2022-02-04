import React from "react";
import {
    Container,
    ListContainer,
    Hamburger,
    CompanyLogo,
    Icon
} from "./styles/header"

export default function Header({children}) {
    return <Container>{children}</Container>
}

Header.ListContainer = function HeaderListContainer({children}) {
    return <ListContainer>{children}</ListContainer>
}

Header.Hamburger = function HeaderHamburger({...restProps}) {
    return <Hamburger {...restProps}><Icon>&nbsp;</Icon></Hamburger>
}

Header.CompanyLogo = function HeaderCompanyLogo({...restProps}) {
    return <CompanyLogo {...restProps}>Golden Wok</CompanyLogo>
}