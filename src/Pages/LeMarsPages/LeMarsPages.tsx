import React from 'react'
import PageProto from 'components/PageProto/PageProto'
import { ArraysAllProps } from '../../components/Arrays/arraysAll'
import { useAppSelector } from 'redux/hooks'

type Props = { heightImg: string; titlePage: string }

const LeMarsPages = ({ heightImg, titlePage }: Props) => {
    const arraysAll = useAppSelector((state) => state.products)
    return (
        <>
            {arraysAll
                .filter(({ title }: ArraysAllProps) => title === titlePage)
                .map(
                    ({
                        id,
                        img,
                        title,
                        nameCategory,
                        text,
                        alt,
                    }: ArraysAllProps) => (
                        <PageProto
                            key={id}
                            img={img}
                            title={title}
                            nameCategory={nameCategory}
                            alt={alt}
                            text={text}
                            heightImg={heightImg}
                        />
                    )
                )}
        </>
    )
}

export default LeMarsPages
