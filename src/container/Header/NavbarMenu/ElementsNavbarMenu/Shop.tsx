import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
            <div className="menu-item">SHOP</div>
            <ul className={active ? 'sub-menu active' : 'sub-menu'}>
                {categoryList.map(({ id, name }: CategoryProps) => (
                    <li className="sub-menu__item" key={id}>
                        <Link to={`/${name}`}> {name}</Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Shop
