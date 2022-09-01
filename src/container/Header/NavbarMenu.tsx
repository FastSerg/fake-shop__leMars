import React from 'react'

const pages = [
    { name: 'Home', id: 1 },
    { name: 'Post Layout', id: 2 },
    { name: 'Category', id: 3 },
    { name: 'Shop', id: 4 },
    { name: 'Pages', id: 5 },
    { name: 'Contact us', id: 6 },
]
type Props = {}

type navProps = { name: string; id: number }

export const NavbarMenu = (props: Props) => {
    return (
        <nav className="navbar-menu">
            <ul className="navbar-menu__list">
                {pages.map(({ name, id }: navProps) => (
                    <li className="navbar-menu__item" key={id}>
                        {name.toUpperCase()}
                    </li>
                ))}
                <ul className="category"></ul>
                {/* <li className="navbar-menu__item">
                            <a href="#">CATEGORY</a>
                            <ul className="category">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li> */}
            </ul>
        </nav>
    )
}
