import React from 'react'

import PageProto from 'components/PageProto/PageProto'
import { arraysAll, ArraysAllProps } from 'components/Arrays/arraysAll'

type Props = { heightImg: string }

const StylingHarvey = ({ heightImg }: Props) => {
    return (
        <>
            {arraysAll
                .filter(
                    ({ title }: ArraysAllProps) => title === 'Styling Harvey'
                )
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

export default StylingHarvey
