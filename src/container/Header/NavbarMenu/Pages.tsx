import React, { useState } from 'react'

const categoryList = [
    { name: 'About Us', id: 1 },
    { name: 'Coming Soon', id: 2 },
    { name: 'Site', id: 3 },
    { name: 'Site down', id: 4 },
]

type Props = {}

type CategoryProps = { name: string; id: number }

const Pages = (props: Props) => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <li
            className="page"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="menu-item">PAGES</div>
            <ul className={active ? 'sub-menu active' : 'sub-menu'}>
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
