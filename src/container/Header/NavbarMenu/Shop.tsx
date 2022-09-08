import React from 'react'

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
    return (
        <li className="shop">
            <div className="menu-item">SHOP</div>
            <ul className="sub-menu">
                {categoryList.map(({ id, name }: CategoryProps) => (
                    <li className="sub-menu__item" key={id}>
                        {name}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Shop
