import React, { useState } from 'react'
import Category from './Category'
import Home from './Home'
import './NavbarMenu.scss'
import Pages from './Pages'
import PostLayout from './PostLayout'
import Shop from './Shop'

type Props = {}

export const NavbarMenu = (props: Props) => {
    return (
        <nav className="navbar-menu">
            <ul className="navbar-menu__list">
                <Home />
                <PostLayout />
                <Category />
                <Shop />
                <Pages />
                <li className="contact">
                    <div className="menu-item">CONTACT US</div>
                </li>
            </ul>
        </nav>
    )
}
