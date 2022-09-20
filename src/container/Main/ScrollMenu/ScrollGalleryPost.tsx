import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'
import { NavLink } from 'react-router-dom'

type Props = {}
type itemDataProps = { id: number; img: string; alt: string }

const itemData = [
    { id: 1, img: '/img/ledy_in_white_full.jpg', alt: 'ledy_in_white' },
    { id: 2, img: '/img/wooman_near_water.jpg', alt: 'wooman_near_water' },
    { id: 3, img: '/img/wooman_in_bike.jpg', alt: 'wooman_near_water' },
    { id: 4, img: '/img/motoki-tonn.jpg', alt: 'motoki-tonn' },
]

const ScrollGalleryPost = (props: Props) => {
    return (
        <>
            <Grid item md={12}>
                <h6 className="widget-title">
                    <span>INSTAGRAM</span>
                </h6>
            </Grid>
            <Grid item md={12}>
                <h6 className="widget-title">
                    <span>Gallery Post</span>
                </h6>
            </Grid>
            {itemData.map(({ id, img, alt }: itemDataProps) => (
                <Grid item md={6} key={id}>
                    <Card
                        sx={{
                            padding: '10px',
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="100%"
                            image={img}
                            alt={alt}
                            sx={{
                                width: '117px',
                                height: '123px',
                                backgroundSize: 'cover',
                            }}
                        />
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default ScrollGalleryPost
