import React, { useState } from 'react'

const homeList = [
    // {title: 'HOME'},
    { name: 'Home 1', id: 1 },
    { name: 'Home 2', id: 2 },
    { name: 'Home 3', id: 3 },
    { name: 'Home 4', id: 4 },
    { name: 'Home 5', id: 5 },
    { name: 'Home 6', id: 6 },
]
type homeListProps = { name: string; id: number }
type Props = {}

const Home = (props: Props) => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <li
            className="home"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="menu-item">HOME</div>
            <ul className={active ? 'sub-menu active' : 'sub-menu'}>
                {homeList.map(({ name, id }: homeListProps) => (
                    <li className="sub-menu__item" key={id}>
                        {name}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Home
