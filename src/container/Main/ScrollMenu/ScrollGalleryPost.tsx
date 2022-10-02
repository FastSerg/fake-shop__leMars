import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {}
type itemDataProps = { id: number; name: string; img: string; alt: string }

const itemData = [
    {
        id: 1,
        name: 'storyOfBeauty',
        img: '/img/ledy_in_white_full.jpg',
        alt: 'ledy_in_white',
    },
    {
        id: 2,
        name: 'everything',
        img: '/img/wooman_near_water.jpg',
        alt: 'wooman_near_water',
    },
    {
        id: 3,
        name: 'catalines',
        img: '/img/wooman_in_bike.jpg',
        alt: 'wooman_near_water',
    },
    {
        id: 4,
        name: 'jackson',
        img: '/img/motoki-tonn.jpg',
        alt: 'motoki-tonn',
    },
]

const ScrollGalleryPost = (props: Props) => {
    return (
        <>
            <Grid item md={12} sm={12}>
                <h6 className="widget-title">
                    <span>INSTAGRAM</span>
                </h6>
            </Grid>
            <Grid item md={12} sm={12}>
                <h6 className="widget-title">
                    <span>Gallery Post</span>
                </h6>
            </Grid>
            {itemData.map(({ id, img, alt, name }: itemDataProps) => (
                <Grid item md={6} sm={3} key={id}>
                    <Card
                        sx={{
                            padding: '10px',
                        }}
                    >
                        <Link to={`/${name}`}>
                            {' '}
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
                        </Link>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default ScrollGalleryPost
