import React, { useRef } from 'react'
import { imgListProps } from '../../../components/Arrays/imgListArr'
import { Link } from 'react-router-dom'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const ContainerMainItem = forwardRef(
    (
        { id, img, nameCategory, title, readMore, alt, namePage }: imgListProps,
        ref
    ) => {
        const componentRef = useRef<HTMLDivElement>(null)
        return (
            <div ref={componentRef}>
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
            </div>
        )
    }
)

export const MContainerMainItem = motion(ContainerMainItem)
