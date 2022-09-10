import React, { useState } from 'react'

const postLayoutList = [
    { name: 'Post Standard', id: 1 },
    { name: 'Post Left Sidebar', id: 2 },
    { name: 'Post Full Width', id: 3 },
    { name: 'Post Slide Show', id: 4 },
    { name: 'Post Small Side Image', id: 5 },
    { name: 'Post Gallery', id: 6 },
    { name: 'Post Gallery Alt', id: 6 },
    { name: 'Post Link', id: 6 },
    { name: 'Post Quote', id: 6 },
    { name: 'Post Audio', id: 6 },
    { name: 'Post Open Gutenberg', id: 6 },
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
