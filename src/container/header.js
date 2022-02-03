import React from "react";
import { Header } from "../components";
import { useNavDisplayContext } from "../contexts/NavDisplayContext";
import { Link } from "react-router-dom"
import { useDeviceWidthContext } from "../contexts/DeviceWidthContext"
import { Navbar } from "../components";
import menu from "../components/documents/menu.pdf"


export default function HeaderContainer() {
    const {navShow, setNavShow} = useNavDisplayContext()
    const {isLargeDevice} = useDeviceWidthContext()

    const showNav = () => {
        setNavShow(true)
    }

    return (
        <Header>
            {isLargeDevice ?
                <Header.ListContainer>
                    <Navbar.Link to="/">
                        <Navbar.ListItem>Home</Navbar.ListItem>
                    </Navbar.Link>
                    <Navbar.Link to="/about">
                        <Navbar.ListItem>About</Navbar.ListItem>
                    </Navbar.Link>
                    <Navbar.Anchor href={menu} target="_blank">Menu</Navbar.Anchor>
                    <Navbar.Link to="/contact-us">
                        <Navbar.ListItem>Contact</Navbar.ListItem>
                    </Navbar.Link>
                    <Navbar.Link to="/faqs">
                        <Navbar.ListItem>FAQs</Navbar.ListItem>
                    </Navbar.Link>
                </Header.ListContainer> 
                :
                <Header.Hamburger navShow={navShow} onClick={showNav}></Header.Hamburger>
            }
            <Header.CompanyLogo to="/"></Header.CompanyLogo>

        </Header>
    )
}