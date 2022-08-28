import React from 'react'
import ContainerMainItem from './ContainerMainItem'
import imgListArr from './imgListArr'

type Props = { id?: number; img: string; text?: string; alt: string }

const ContainerMain = () => {
    return (
        <>
            <div className="container">
                <div className="container__post">
                    {imgListArr.map(({ id, img, text, alt }: Props) => (
                        <div className="post__item" key={id}>
                            <ContainerMainItem
                                img={img}
                                alt={alt}
                                text={text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ContainerMain
