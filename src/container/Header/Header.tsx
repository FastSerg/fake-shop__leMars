import * as React from 'react'
import './Header.scss'
import { NavbarMenu } from './NavbarMenu'
import { Social } from './Social'
import { Logo } from './Logo'

const Header = () => {
    return (
        <div className="site-header">
            <div className="navbar">
                <Logo />
                <NavbarMenu />
                <Social />
            </div>
        </div>
    )
}
export default Header
