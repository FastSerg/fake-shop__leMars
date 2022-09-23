import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const categoryList = [
    { name: 'Shop', id: 1 },
    { name: 'Product Detail', id: 2 },
    { name: 'Cart', id: 3 },
    { name: 'Checkout', id: 4 },
    { name: 'My Account', id: 5 },
]

type CategoryProps = { name: string; id: number }
type Props = {}

const Shop = (props: Props) => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <li
            className="shop"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="menu-item">
                <NavLink to="/products">SHOP</NavLink>
            </div>
            <ul className={active ? 'sub-menu active' : 'sub-menu'}>
                {categoryList.map(({ id, name }: CategoryProps) => (
                    <li className="sub-menu__item" key={id}>
                        {name === 'Cart' ? (
                            <NavLink to="/cart">{name}</NavLink>
                        ) : null}{' '}
                        {name}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Shop
