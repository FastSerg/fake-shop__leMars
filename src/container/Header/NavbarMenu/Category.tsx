import React from 'react'

const categoryList = [
    { name: 'All', id: 1 },
    { name: 'BEAUTY', id: 2 },
    { name: 'FASHION', id: 3 },
    { name: 'LIFESTYLE', id: 4 },
    { name: 'TRAVEL', id: 5 },
]
type CategoryProps = { name: string; id: number }

type Props = {}

const Category = (props: Props) => {
    return (
        <li className="category">
            <div className="menu-item">CATEGORY</div>
            <ul className="sub-menu category-position">
                {categoryList.map(({ id, name }: CategoryProps) => (
                    <li className="sub-menu__item" key={id}>
                        {name}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Category
