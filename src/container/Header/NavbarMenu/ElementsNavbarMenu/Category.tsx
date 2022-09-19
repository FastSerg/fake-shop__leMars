import React, { useState } from 'react'
import CategoryTab from './CategoryItemList/CategoryTab'

// const categoryList = [
//     { name: 'All', id: 1 },
//     { name: 'BEAUTY', id: 2 },
//     { name: 'FASHION', id: 3 },
//     { name: 'LIFESTYLE', id: 4 },
//     { name: 'TRAVEL', id: 5 },
// ]
// type CategoryProps = { name: string; id: number }

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
    isActive?: boolean
}

const Category = ({ active, changeState, isActive = false }: Props) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <li
            className="category"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="menu-item">CATEGORY</div>
            <div className={show ? 'lage-menu active' : 'lage-menu'}>
                <CategoryTab />
            </div>
        </li>
    )
}

export default Category
