import Carousel from 'components/Carousel/Carousel'
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
                <Carousel />
            </div>
        </li>
    )
}

export default Category
