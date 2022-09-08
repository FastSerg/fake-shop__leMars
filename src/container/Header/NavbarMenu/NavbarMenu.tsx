import React from 'react'
import Category from './Category'
import Home from './Home'
import './NavbarMenu.scss'
import Pages from './Pages'
import PostLayout from './PostLayout'
import Shop from './Shop'

// const pages = [
//     { name: 'Home', id: 1 },
//     { name: 'Post Layout', id: 2 },
//     { name: 'Category', id: 3 },
//     { name: 'Shop', id: 4 },
//     { name: 'Pages', id: 5 },
//     { name: 'Contact us', id: 6 },
// ]
type Props = {}
// type navProps = { name: string; id: number }

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

{
    /* {pages.map(({ name, id }: navProps) => (
                    <li className="navbar-menu__item" key={id}>
                        {name.toUpperCase()}
                    </li>
                ))} */
}
