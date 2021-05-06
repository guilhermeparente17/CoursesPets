import React from 'react'
import {
    Navbar,
    NavLogo,
    NavbarMenu,
    NavbarItem,
    NavbarLink,
    MobileIcon,
    FontSimple,
    FontBold
} from './NavbarElements'




const index = () => {
    return (
        <Navbar>
            <NavLogo><FontSimple>Animal</FontSimple> <FontBold>Learning</FontBold></NavLogo>
            <NavbarMenu>
                <NavbarItem><NavbarLink href="/">Courses</NavbarLink></NavbarItem>
                <NavbarItem><NavbarLink href="/">Teachers</NavbarLink></NavbarItem>
                <NavbarItem><NavbarLink href="/">Prices</NavbarLink></NavbarItem>
            </NavbarMenu>
            <MobileIcon />
        </Navbar>
    )
}

export default index
