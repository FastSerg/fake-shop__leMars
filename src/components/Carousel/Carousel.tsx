import React from 'react'
import './Carousel/scss'
type Props = {}

const Carousel = ({ carouselItems, ...rest }: any) => {
    const [active, setActive] = React.useState(0)
    let scrollInterval: any = null

    // React.useEffect(() => {
    //     scrollInterval = setTimeout(() => {
    //         setActive((active + 1) % carouselItems.length)
    //     }, 2000)

    //     return () => clearTimeout(scrollInterval)
    // })

    return (
        <div className="carousel">
            {carouselItems.map((item: any, index: number) => {
                const activeClass = active === index ? ' visible' : ''
                return React.cloneElement(item, {
                    ...rest,
                    className: `carousel-item${activeClass}`,
                })
            })}
        </div>
    )
}

export default Carousel

// {
//     arrMainPageLeft
//         // .filter(
//         //     ({ nameCategory }: arrMainPageProps) =>
//         //         nameCategory === 'FASHION'
//         // )
//         .map(({ img, alt, nameCategory, title, id }: arrMainPageProps) => (
//             <Grid
//                 key={id}
//                 container
//                 spacing={1}
//                 sx={{
//                     textAlign: 'center',
//                     display: 'flex',
//                 }}
//             >
//                 <Grid item md={12}>
//                     <ItemHeaderMenu
//                         img={img}
//                         alt={alt}
//                         nameCategory={nameCategory}
//                         title={title}
//                         id={id}
//                     />
//                 </Grid>
//             </Grid>
//         ))
// }
