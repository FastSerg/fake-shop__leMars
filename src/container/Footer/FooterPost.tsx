import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'

// const itemPages = [
//     { id: 1, img: '/img/ledy_in_white_full.jpg', alt: 'ledy_in_white' },
//     { id: 2, img: '/img/wooman_near_water.jpg', alt: 'wooman_near_water' },
//     { id: 3, img: '/img/wooman_in_bike.jpg', alt: 'wooman_near_water' },
//     { id: 4, img: '/img/motoki-tonn.jpg', alt: 'motoki-tonn' },
// ]

// type itemDataProps = { id: number; img: string; alt: string }

// {itemPages.map(({ id, alt, img }: itemDataProps) => (
//     <Grid item md={6}>
//         {' '}
//         <Card key={id}>
//             <CardMedia
//                 component="img"
//                 image={img}
//                 alt={alt}
//                 sx={{
//                     width: '80px',
//                     height: '80px',
//                     backgroundSize: 'cover',
//                 }}
//             />
//         </Card>
//     </Grid>
// ))}

type Props = {}

const FooterPost = (props: Props) => {
    return (
        <Grid item md={3} sm={12}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <h6 className="widget-title ">RECENT POST</h6>
                </Grid>
                <Grid
                    item
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Card>
                        <CardMedia
                            component="img"
                            image="/img/ledy_in_white_full.jpg"
                            alt="wooman in white"
                            sx={{
                                width: '80px',
                                height: '80px',
                                backgroundSize: 'cover',
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <div className="widget-post-info">
                        <div>Story Of Beaty</div>
                        <div>OCT 1, 2022</div>
                    </div>
                </Grid>
                <Grid
                    item
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Card>
                        <CardMedia
                            component="img"
                            image="/img/wooman_near_water.jpg"
                            alt="wooman in white"
                            sx={{
                                width: '80px',
                                height: '80px',
                                backgroundSize: 'cover',
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <div className="widget-post-info">
                        <div>Everything About Cultural</div>
                        <div>OCT 1, 2022</div>
                    </div>
                </Grid>

                <Grid
                    item
                    md={6}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Card>
                        <CardMedia
                            component="img"
                            image="/img/wooman_in_bike.jpg"
                            alt="wooman_in_bike"
                            sx={{
                                width: '80px',
                                height: '80px',
                                backgroundSize: 'cover',
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <div className="widget-post-info">
                        <div>Las Catalines Welcome</div>
                        <div>OCT 1, 2022</div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FooterPost
