import React from 'react'
import { imgListProps } from '../MainCatagory/imgListArr'
import { Link } from 'react-router-dom'

const ContainerMainItem = ({
    id,
    img,
    nameCategory,
    title,
    readMore,
    alt,
}: imgListProps) => {
    return (
        <>
            <div className="item__img">
                <img src={img} alt={alt} />
            </div>
            <div className="header-overlay--post"></div>
            <div className="item__text">
                <div className="category-style">{nameCategory}</div>
                <h6 className="title-post">
                    <Link to={alt}>{title}</Link>
                </h6>
                <div className="category-style">{readMore}</div>
            </div>
        </>
    )
}

export default ContainerMainItem
