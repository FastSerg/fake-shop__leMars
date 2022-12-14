import React from 'react'
import ContainerMainItem from '../CardMainContent/ContainerMainItem'
import imgListArr from '../../../components/Arrays/imgListArr'
import { imgListProps } from '../../../components/Arrays/imgListArr'

const ContainerMainCategory = () => {
    return (
        <>
            <div className="container top">
                <div className="container__post">
                    {imgListArr.map(
                        ({
                            id,
                            img,
                            nameCategory,
                            title,
                            readMore,
                            alt,
                            namePage,
                        }: imgListProps) => (
                            <div className="post__item" key={id}>
                                <ContainerMainItem
                                    id={id}
                                    img={img}
                                    alt={alt}
                                    nameCategory={nameCategory}
                                    title={title}
                                    readMore={readMore}
                                    namePage={namePage}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default ContainerMainCategory
