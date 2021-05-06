import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';

export const Navbar = styled.div`
    background: #373542;
    height:50px;
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    
    
`

export const NavLogo = styled.h3`
    color:#fff;
    padding: 0 100px;

    @media screen and (max-width: 768px){
        padding: 0 20px;
    }
    
`
export const NavbarMenu = styled.ul`
    display:flex;
    list-style:none;
    padding: 0 100px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavbarItem = styled.li`
    padding: 0 15px;
    text-transform: uppercase;
    height: 100%;

    
`

export const NavbarLink = styled.a`
    color:#fff;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;

`
export const MobileIcon = styled(FaBars)`
    display: none;
    font-size: 1.2rem;
    color:#fff;
    margin-right: 10px;
    cursor: pointer;

    @media screen and (max-width: 768px){
        display: block;

    }
`

export const FontSimple = styled.span`
    font-family: 'Roboto', sans-serif;
`
export const FontBold = styled.span`
    font-family: 'Itim', cursive;
`
