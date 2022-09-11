import * as React from 'react'
import './Header.scss'
import { NavbarMenu } from './NavbarMenu/NavbarMenu'
import { Social } from './Social'
import { Logo } from './Logo'
import { NavLink } from 'react-router-dom'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const Header = ({ changeState, active }: Props) => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="navbar">
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                    <NavbarMenu active={active} changeState={changeState} />
                    <Social />
                </div>
            </div>
        </header>
    )
}
export default Header
