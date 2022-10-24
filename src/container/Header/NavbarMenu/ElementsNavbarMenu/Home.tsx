import React, { useState } from 'react'
const homeList = [{ name: 'Home 1', id: 1 }]

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
