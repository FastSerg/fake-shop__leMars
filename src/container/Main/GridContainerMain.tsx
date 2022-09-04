import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
    Button,
} from '@mui/material'

type Props = {}

const GridContainerMain = (props: Props) => {
    return (
        <>
            <Grid container spacing={2} sx={{ padding: '70px 0' }}>
                <Grid item md={12}>
                    <Card sx={{ maxWidth: 840 }}>
                        <CardActionArea>
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
                                        fontSize: '42px',
                                        letterSpacing: '5px',
                                        marginBottom: '10px',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                    }}
                                >
                                    Story of Beauty
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="420"
                                image="/img/ledy_in_white.jpg"
                                alt="ledy_in_white"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>{' '}
                <Grid item md={6}>
                    <Grid item md={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/wooman_near_water.jpg"
                                    alt="wooman_near_water"
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
                                        Everything About Cultural
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#77797c',
                                            lineHeight: '24px',
                                            marginBottom: '24px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Donec sed lacus eu massa commodo
                                        interdum non id mauris. Etiam eu
                                        dignissim elit. Nulla cursus neque
                                        adictum quam tristique ac. Pellentesque
                                        habitant morbi tristique
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/motoki-tonn.jpg"
                                    alt="motoki-tonn"
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
                                        TRAVEL
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
                                        Watch Jackson Wang
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#77797c',
                                            lineHeight: '24px',
                                            marginBottom: '24px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Donec sed lacus eu massa commodo
                                        interdum non id mauris. Etiam eu
                                        dignissim elit. Nulla cursus neque
                                        adictum quam tristique ac. Pellentesque
                                        habitant morbi tristique
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/horse.jpg"
                                    alt="horse"
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
                                        TRAVEL
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
                                        Styling Harvey
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#77797c',
                                            lineHeight: '24px',
                                            marginBottom: '24px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Donec sed lacus eu massa commodo
                                        interdum non id mauris. Etiam eu
                                        dignissim elit. Nulla cursus neque
                                        adictum quam tristique ac. Pellentesque
                                        habitant morbi tristique
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <Grid item md={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/wooman_in_bike.jpg"
                                    alt="wooman_in_bike"
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
                                        Las Catalines Welcome
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#77797c',
                                            lineHeight: '24px',
                                            marginBottom: '24px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Donec sed lacus eu massa commodo
                                        interdum non id mauris. Etiam eu
                                        dignissim elit. Nulla cursus neque
                                        adictum quam tristique ac. Pellentesque
                                        habitant morbi tristique
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/bridge.jpg"
                                    alt="bridge"
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
                                        Clarins Marcara
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#77797c',
                                            lineHeight: '24px',
                                            marginBottom: '24px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Donec sed lacus eu massa commodo
                                        interdum non id mauris. Etiam eu
                                        dignissim elit. Nulla cursus neque
                                        adictum quam tristique ac. Pellentesque
                                        habitant morbi tristique
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={12}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/man-with-board.jpg"
                                    alt="man-with-board"
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
                                        Dress Like a Parisian
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#77797c',
                                            lineHeight: '24px',
                                            marginBottom: '24px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Donec sed lacus eu massa commodo
                                        interdum non id mauris. Etiam eu
                                        dignissim elit. Nulla cursus neque
                                        adictum quam tristique ac. Pellentesque
                                        habitant morbi tristique
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={12}
                    sx={{ textAlign: 'center', marginTop: '60px' }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            color: 'white',
                            backgroundColor: 'black',
                            borderRadius: '16px',
                        }}
                    >
                        LOAD MORE
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default GridContainerMain
