import React from 'react'

const categoryList = [
    { name: 'About Us', id: 1 },
    { name: 'Coming Soon', id: 2 },
    { name: 'Site', id: 3 },
    { name: 'Site down', id: 4 },
]

type Props = {}

type CategoryProps = { name: string; id: number }

const Pages = (props: Props) => {
    return (
        <li className="page">
            <div className="menu-item">PAGES</div>
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

export default Pages
