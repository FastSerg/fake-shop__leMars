import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'
import { MCardMediaProtoMain } from './CardMediaProtoMain'
import {
    arrMainPageProps,
    arrMainPageLeft,
    arrMainPageRight,
} from './arrGridContainerMain'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Props = {}

const GridContainerMain = (props: Props) => {
    const MProtoMain = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1.7, delay: custom * 0.2 },
        }),
    }
    return (
        <>
            <Grid
                container
                spacing={4}
                sx={{ padding: '70px 0' }}
                component={motion.div}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{ amount: 0.2, once: true }}
            >
                <Grid
                    item
                    md={12}
                    component={motion.div}
                    variants={MProtoMain}
                    custom={1}
                >
                    <Link to="/storyOfBeauty">
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
                    </Link>
                </Grid>
                <Grid item md={6}>
                    {arrMainPageLeft.map(
                        (
                            {
                                id,
                                img,
                                title,
                                text,
                                nameCategory,
                                alt,
                                namePage,
                            }: arrMainPageProps,
                            i
                        ) => (
                            <Grid
                                item
                                md={12}
                                key={id}
                                component={motion.div}
                                variants={MProtoMain}
                                custom={i + 3}
                            >
                                <Link to={`/${namePage}`}>
                                    <MCardMediaProtoMain
                                        id={id}
                                        img={img}
                                        title={title}
                                        text={text}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                    />
                                </Link>
                            </Grid>
                        )
                    )}
                </Grid>
                <Grid item md={6}>
                    {arrMainPageRight.map(
                        (
                            {
                                id,
                                img,
                                title,
                                text,
                                nameCategory,
                                alt,
                                namePage,
                            }: arrMainPageProps,
                            i
                        ) => (
                            <Grid
                                item
                                md={12}
                                key={id}
                                component={motion.div}
                                variants={MProtoMain}
                                custom={i + 3}
                            >
                                <Link to={`/${namePage}`}>
                                    <MCardMediaProtoMain
                                        id={id}
                                        img={img}
                                        title={title}
                                        text={text}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                    />
                                </Link>
                            </Grid>
                        )
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default GridContainerMain
