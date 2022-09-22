import Carousel from 'components/Carousel/Carousel'
import React, { useState } from 'react'

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
                {/* <CategoryTab /> */}
                <Carousel />
            </div>
        </li>
    )
}

export default Category
