import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'
import { Social } from '../Header/Social'

type itemDataProps = { id: number; img: string; alt: string }

const itemData = [
    { id: 1, img: '/img/ledy_in_white.jpg', alt: 'ledy_in_white' },
    { id: 2, img: '/img/wooman_near_water.jpg', alt: 'wooman_near_water' },
    { id: 3, img: '/img/wooman_in_bike.jpg', alt: 'wooman_near_water' },
    { id: 4, img: '/img/motoki-tonn.jpg', alt: 'motoki-tonn' },
]

const GritContainerScrolling = () => {
    return (
        <>
            <Grid container spacing={1} sx={{ marginLeft: '15px' }}>
                <Grid item md={12}></Grid>
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
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardMedia
                                component="img"
                                height="115px"
                                image={img}
                                alt={alt}
                            />
                        </Card>
                    </Grid>
                ))}
                <Grid item md={12}>
                    <Grid item md={12}>
                        <h6 className="widget-title">
                            <span>SOCIAL ICON</span>
                        </h6>
                    </Grid>
                    <Grid item md={12}>
                        <Social />
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardMedia
                            component="img"
                            height="96px"
                            image="/img/fon_scroll_bottom.jpg"
                            alt="fon_scroll_bottom"
                        />
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default GritContainerScrolling
