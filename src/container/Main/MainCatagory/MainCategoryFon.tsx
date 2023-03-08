import React from 'react'
import { MContainerMainItem } from '../CardMainContent/ContainerMainItem'
import imgListArr from '../../../components/Arrays/imgListArr'
import { imgListProps } from '../../../components/Arrays/imgListArr'
import { motion } from 'framer-motion'

const ContainerMainCategory = () => {
    const MPost = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2 },
        }),
    }
    return (
        <>
            <div className="container top">
                <motion.div
                    initial={'hidden'}
                    whileInView="visible"
                    viewport={{ amount: 0.8, once: true }}
                    className="container__post"
                >
                    {imgListArr.map(
                        (
                            {
                                id,
                                img,
                                nameCategory,
                                title,
                                readMore,
                                alt,
                                namePage,
                            }: imgListProps,
                            i
                        ) => (
                            <motion.div
                                variants={MPost}
                                custom={i}
                                className="post__item"
                                key={id}
                            >
                                <MContainerMainItem
                                    id={id}
                                    img={img}
                                    alt={alt}
                                    nameCategory={nameCategory}
                                    title={title}
                                    readMore={readMore}
                                    namePage={namePage}
                                />
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>
        </>
    )
}

export default ContainerMainCategory
