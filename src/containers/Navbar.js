import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav `
    width: 100%;
    height: 60px;
    padding: 0 40px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    
`
const NavLink = styled(Link) `
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #000;
`

const Navbar = () => {
    return (
        <NavContainer>
            <NavLink to='/' className="logo">My Shop</NavLink>
        </NavContainer>
    )
}

export default Navbar
