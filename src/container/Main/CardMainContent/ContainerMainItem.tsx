import React from 'react'
import { imgListProps } from '../../../components/Arrays/imgListArr'
import { Link } from 'react-router-dom'

const ContainerMainItem = ({
    id,
    img,
    nameCategory,
    title,
    readMore,
    alt,
    namePage,
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
                    <Link to={`/${namePage}`}>{title}</Link>
                </h6>
                <div className="category-style">{readMore}</div>
            </div>
        </>
    )
}

export default ContainerMainItem
