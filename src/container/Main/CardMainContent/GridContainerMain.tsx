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
import CardMediaProtoMain from './CardMediaProtoMain'
import {
    arrMainPageProps,
    arrMainPageLeft,
    arrMainPageRight,
} from './arrGridContainerMain'
import { NavLink } from 'react-router-dom'

type Props = {}

const GridContainerMain = (props: Props) => {
    return (
        <>
            <Grid container spacing={4} sx={{ padding: '70px 0' }}>
                <Grid item md={12}>
                    <NavLink to="/storyOfBeaty">
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
                    </NavLink>
                </Grid>{' '}
                <Grid item md={6}>
                    {arrMainPageLeft.map(
                        ({
                            id,
                            img,
                            title,
                            text,
                            nameCategory,
                            alt,
                        }: arrMainPageProps) => (
                            <Grid item md={12} key={id}>
                                {title === 'Styling Harvey' ? (
                                    <NavLink to="/StylingHarvey">
                                        {' '}
                                        <CardMediaProtoMain
                                            id={id}
                                            img={img}
                                            title={title}
                                            text={text}
                                            alt={alt}
                                            nameCategory={nameCategory}
                                        />
                                    </NavLink>
                                ) : title === 'Everything About Cultural' ? (
                                    <NavLink to="/cultural">
                                        {' '}
                                        <CardMediaProtoMain
                                            id={id}
                                            img={img}
                                            title={title}
                                            text={text}
                                            alt={alt}
                                            nameCategory={nameCategory}
                                        />
                                    </NavLink>
                                ) : (
                                    <CardMediaProtoMain
                                        id={id}
                                        img={img}
                                        title={title}
                                        text={text}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                    />
                                )}
                            </Grid>
                        )
                    )}
                </Grid>
                <Grid item md={6}>
                    {arrMainPageRight.map(
                        ({
                            id,
                            img,
                            title,
                            text,
                            nameCategory,
                            alt,
                        }: arrMainPageProps) => (
                            <Grid item md={12} key={id}>
                                <CardMediaProtoMain
                                    id={id}
                                    img={img}
                                    title={title}
                                    text={text}
                                    alt={alt}
                                    nameCategory={nameCategory}
                                />
                            </Grid>
                        )
                    )}
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
