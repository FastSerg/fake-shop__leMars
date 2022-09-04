import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'

type Props = {}

const GridItemCartTop = (props: Props) => {
    return (
        <>
            <Grid container spacing={2} sx={{ marginBottom: '60px' }}>
                <Grid item md={6}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/img/man_with_bag.jpg"
                                alt="man_with_bag"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <div className="blog-cart">
                        <div className="blog-cart__info">
                            <div className="title-top">
                                <h5>Lifestyle</h5>
                            </div>
                            <h4 className="title">Makeup for new Look</h4>
                            <p className="text-align-center">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam imperdiet, orci sed
                                volutpat tempor, nisl massa ullamcorper tortor,
                                vitae vestibulum neque lacus a sem. Donec
                            </p>
                        </div>
                    </div>
                </Grid>

                <Grid item md={4}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/img/wooman_legs.jpg"
                                alt="man_with_bag"
                            />
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        marginBottom: '10px',
                                        fontWeight: '600',
                                        color: 'red',
                                        textAlign: 'center',
                                        letterSpacing: '5px',
                                    }}
                                    variant="h6"
                                    component="div"
                                >
                                    FASHION
                                </Typography>
                                <Typography
                                    variant="inherit"
                                    color="#2b2d2e"
                                    sx={{
                                        fontSize: '20px',

                                        marginBottom: '10px',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                    }}
                                >
                                    Ready for the Summer
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/img/sity_palm.jpg"
                                alt="man_with_bag"
                            />
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        marginBottom: '10px',
                                        fontWeight: '600',
                                        color: 'red',
                                        textAlign: 'center',
                                        letterSpacing: '5px',
                                    }}
                                    variant="h6"
                                    component="div"
                                >
                                    LIFESTYLE
                                </Typography>
                                <Typography
                                    variant="inherit"
                                    color="#2b2d2e"
                                    sx={{
                                        fontSize: '20px',

                                        marginBottom: '10px',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                    }}
                                >
                                    Sonoma Valley Lancome
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/img/man_see.jpg"
                                alt="man_with_bag"
                            />
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: '24px',
                                        marginBottom: '10px',
                                        fontWeight: '600',
                                        color: 'red',
                                        textAlign: 'center',
                                        letterSpacing: '5px',
                                    }}
                                    variant="h6"
                                    component="div"
                                >
                                    BEAUTY
                                </Typography>
                                <Typography
                                    variant="inherit"
                                    color="#2b2d2e"
                                    sx={{
                                        fontSize: '20px',

                                        marginBottom: '10px',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                    }}
                                >
                                    New Year Creativity
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default GridItemCartTop
