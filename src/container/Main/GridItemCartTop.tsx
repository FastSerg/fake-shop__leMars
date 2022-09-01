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
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Card sx={{ maxWidth: 415 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="560"
                                image="/img/man_with_bag.jpg"
                                alt="man_with_bag"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <div className="blog-cart">
                        <div className="blog-cart__info"></div>
                    </div>
                </Grid>

                <Grid item md={4}>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="205"
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
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="205"
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
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="205"
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
            </Grid>
        </>
    )
}

export default GridItemCartTop
