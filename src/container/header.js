import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components";
import { Navbar } from "../components";
import { useNavDisplayContext } from "../contexts/NavDisplayContext";
import { useDeviceWidthContext } from "../contexts/DeviceWidthContext"
import menu from "../components/documents/menu.pdf"

export default function HeaderContainer() {
    const {navShow, setNavShow} = useNavDisplayContext()
    const {isLargeDevice} = useDeviceWidthContext()

    const {pathname} = useLocation()
    const [active, setActive] = useState(pathname)

    const showNav = () => {
        setNavShow(true)
    }

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    return (
        <Header>
            {isLargeDevice ?
                <Header.ListContainer>
                    <Navbar.Link to="/">
                        <Navbar.ListItem currentPage={active === "/"}>Home</Navbar.ListItem>
                    </Navbar.Link>
                    <Navbar.Link to="/about">
                        <Navbar.ListItem currentPage={active === "/about"}>About</Navbar.ListItem>
                    </Navbar.Link>
                    <Navbar.Anchor href={menu} target="_blank">Menu</Navbar.Anchor>
                    <Navbar.Link to="/contact-us">
                        <Navbar.ListItem currentPage={active === "/contact"}>Contact</Navbar.ListItem>
                    </Navbar.Link>
                    <Navbar.Link to="/faqs">
                        <Navbar.ListItem currentPage={active === "/faqs"}>FAQs</Navbar.ListItem>
                    </Navbar.Link>
                </Header.ListContainer> 
                :
                <Header.Hamburger navShow={navShow} onClick={showNav} />
            }
            <Header.CompanyLogo to="/" currentPage={active === "/"}></Header.CompanyLogo>
        </Header>
    )
}