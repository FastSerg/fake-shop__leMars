import CategoryCarousel from 'components/CategoryCarousel/CategoryCarousel'
import React, { useState } from 'react'

const Category = () => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <li
            className="category"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="menu-item">CATEGORY</div>
            <div className={show ? 'lage-menu active' : 'lage-menu'}>
                <CategoryCarousel />
            </div>
        </li>
    )
}

export default Category
