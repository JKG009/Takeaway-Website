import React from "react";
import {
    Container,
    Cross,
    ListContainer,
    ListItem,
    StyledLink,
    Anchor
} from "./styles/navbar"

export default function Navbar({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Navbar.Cross = function NavbarCross({...restProps}) {
    return <Cross {...restProps}>&times;</Cross>
}

Navbar.ListContainer = function NavbarListContainer({children, ...restProps}) {
    return <ListContainer {...restProps}>{children}</ListContainer>
}

Navbar.ListItem = function NavbarListItem({children, ...restProps}) {
    return <ListItem {...restProps}>{children}</ListItem>
}

Navbar.Link = function NavbarStyledLink({children, ...restProps}) {
    return <StyledLink {...restProps}>{children}</StyledLink>
}

Navbar.Anchor = function NavbarAnchor({children, ...restProps}) {
    return <Anchor {...restProps}>{children}</Anchor>
}