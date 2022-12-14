import React, { useState } from 'react'

const postLayoutList = [
    { name: 'Post Standard', id: 1 },
    { name: 'Post Left Sidebar', id: 2 },
    { name: 'Post Full Width', id: 3 },
    { name: 'Post Slide Show', id: 4 },
]

type PostLayoutProps = { name: string; id: number }
type Props = {}

const PostLayout = (props: Props) => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <li
            className="post-layout"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="menu-item">POST LAYOUT</div>
            <ul className={active ? 'sub-menu active' : 'sub-menu'}>
                {postLayoutList.map(({ id, name }: PostLayoutProps) => (
                    <li className="sub-menu__item" key={id}>
                        {name}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default PostLayout
