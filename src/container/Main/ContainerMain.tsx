import React from 'react'
import ContainerMainItem from './ContainerMainItem'
import imgListArr from './imgListArr'
import { imgListProps } from './imgListArr'

const ContainerMain = () => {
    return (
        <>
            <div className="container">
                <div className="container__post">
                    {imgListArr.map(
                        ({
                            id,
                            img,
                            nameCategory,
                            title,
                            readMore,
                            alt,
                        }: imgListProps) => (
                            <div className="post__item" key={id}>
                                <ContainerMainItem
                                    id={id}
                                    img={img}
                                    alt={alt}
                                    nameCategory={nameCategory}
                                    title={title}
                                    readMore={readMore}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default ContainerMain
