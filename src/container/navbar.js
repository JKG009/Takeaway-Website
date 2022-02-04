import React from "react";
import { Navbar } from "../components";
import menu from "../components/documents/menu.pdf"
import { useNavDisplayContext } from "../contexts/NavDisplayContext";

export default function NavbarContainer() {
    const {navShow, setNavShow} = useNavDisplayContext()

    const showNav = () => {
        setNavShow(false)
    }

    return (
        <Navbar onClick={showNav} navShow={navShow}>
            <Navbar.Cross onClick={showNav} />
            <Navbar.ListContainer>
                <Navbar.Link onClick={showNav} to="/">
                    <Navbar.ListItem>Home</Navbar.ListItem>
                </Navbar.Link>
                <Navbar.Link onClick={showNav} to="/about">
                    <Navbar.ListItem>About</Navbar.ListItem>
                </Navbar.Link>
                <Navbar.Anchor href={menu} target="_blank">
                    Menu
                </Navbar.Anchor>
                <Navbar.Link onClick={showNav} to="/contact-us">
                    <Navbar.ListItem>Contact</Navbar.ListItem>
                </Navbar.Link>
                <Navbar.Link onClick={showNav} to="/faqs">
                    <Navbar.ListItem>FAQs</Navbar.ListItem>
                </Navbar.Link>
            </Navbar.ListContainer>
        </Navbar>
    )
}