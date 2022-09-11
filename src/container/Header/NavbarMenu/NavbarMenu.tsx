import React from 'react'
import Category from './Category'
import Home from './Home'
import './NavbarMenu.scss'
import Pages from './Pages'
import PostLayout from './PostLayout'
import Shop from './Shop'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

export const NavbarMenu = ({ active, changeState }: Props) => {
    return (
        <nav className="navbar-menu">
            <ul className="navbar-menu__list">
                <Home />
                <PostLayout />
                <Category active={active} changeState={changeState} />
                <Shop />
                <Pages />
                <li className="contact">
                    <div className="menu-item">CONTACT US</div>
                </li>
            </ul>
        </nav>
    )
}
