import React from 'react'
import { Grid, CardMedia } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

type Props = {}
type settingsProps = {
    dots: boolean
    infinite: boolean
    slidesToShow: number
    slidesToScroll: number
    autoplay: boolean
    speed: number
    variableWidth: boolean
    autoplaySpeed: number
    cssEase: string
}
const ScrolSlider = (props: Props) => {
    const arraysAll = useAppSelector((state) => state.products)

    const settings: settingsProps = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        variableWidth: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    }
    return (
        <>
            <Grid
                container
                sx={{
                    margin: '50px 0',
                    padding: '40px 0',
                    overflow: 'hidden',
                }}
            >
                <h6 className="widget-title">
                    <span>Gallery Post-List</span>
                </h6>
                <Slider {...settings}>
                    {arraysAll.map(
                        ({ id, img, nameCategory, title, alt, namePage }) => (
                            <Grid item md={12} key={id}>
                                <Link to={`/${namePage}`}>
                                    {' '}
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={img}
                                        alt={alt}
                                        sx={{
                                            width: '250px',
                                            height: '280px',
                                            backgroundSize: 'cover',
                                        }}
                                    />
                                </Link>
                            </Grid>
                        )
                    )}
                </Slider>
            </Grid>
        </>
    )
}

export default ScrolSlider
