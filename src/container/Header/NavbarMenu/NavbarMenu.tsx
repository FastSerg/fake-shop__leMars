import Category from './ElementsNavbarMenu/Category'
import './NavbarMenu.scss'
import Pages from './ElementsNavbarMenu/Pages'
import PostLayout from './ElementsNavbarMenu/PostLayout'
import Shop from './ElementsNavbarMenu/Shop'
import { NavLink } from 'react-router-dom'

export const NavbarMenu = () => {
    return (
        <nav className="navbar-menu">
            <ul className="navbar-menu__list">
                <PostLayout />
                <Category />
                <Shop />
                <Pages />
                <NavLink to="/contactUs">
                    <li className="contact">
                        <div className="menu-item">CONTACT US</div>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}
