import { arraysAll, ArraysAllProps } from 'components/Arrays/arraysAll'
import PageProto from 'components/PageProto/PageProto'

type Props = { heightImg: string }

const CatalinesWelcome = ({ heightImg }: Props) => {
    return (
        <>
            {arraysAll
                .filter(
                    ({ title }: ArraysAllProps) =>
                        title === 'Las Catalines Welcome'
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

export default CatalinesWelcome
