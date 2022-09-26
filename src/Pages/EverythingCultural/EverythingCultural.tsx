import { arraysAll, ArraysAllProps } from 'components/Arrays/arraysAll'
import PageProto from 'components/PageProto/PageProto'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import CulturalContent from './CulturalContent'

type Props = { heightImg: string }

const EverythingCultural = ({ heightImg }: Props) => {
    return (
        <>
            {arraysAll
                .filter(
                    ({ title }: ArraysAllProps) =>
                        title === 'Everything About Cultural'
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

export default EverythingCultural
