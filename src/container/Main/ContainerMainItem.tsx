import React from 'react'

type Props = { id?: number; img: string; text?: string; alt: string }

const ContainerMainItem = ({ id, img, text, alt }: Props) => {
    return (
        <>
            <div className="item__img">
                <img src={img} alt={alt} />
            </div>
            <div className="item__text">{text}</div>
            <div className="header-overlay--post"></div>
        </>
    )
}

export default ContainerMainItem
