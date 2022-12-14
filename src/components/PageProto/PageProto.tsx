import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'

import GritContainerScrolling from 'container/Main/ScrollMenu/GritContainerScrolling'
import CommentsForm from '../../Pages/CommentsForm/CommentsForm'

type Props = {
    id?: number
    img: string
    nameCategory: string
    title: string
    readMore?: string
    alt: string
    text?: string
    heightImg: string
}

const PageProto = ({
    nameCategory,
    text,
    id,
    img,
    title,
    alt,
    heightImg,
}: Props) => {
    return (
        <div className="container-pages">
            <div className="container">
                <Grid
                    container
                    spacing={1}
                    sx={{
                        paddingTop: '20px',
                        marginTop: '160px',
                    }}
                >
                    <Grid item md={9}>
                        <Grid container sx={{ maxWidth: '850px' }}>
                            <Grid item md={12}>
                                <Card>
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
                                                {nameCategory}
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
                                                {title}
                                            </Typography>
                                        </CardContent>
                                        <CardMedia
                                            component="img"
                                            height={heightImg}
                                            image={img}
                                            alt={alt}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>{' '}
                            <Grid item md={12} sx={{ marginTop: '30px' }}>
                                <Typography
                                    sx={{
                                        marginBottom: '20px',
                                        lineHeight: '1.7',
                                    }}
                                >
                                    {text}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                sx={{
                                    padding: '0 20px 0 40px',
                                    color: '#2b2d2e',
                                    lineHeight: '30px',
                                    clear: 'both',
                                    marginBottom: '20px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '17px',
                                        marginBottom: '20px',
                                        lineHeight: '1.7',
                                    }}
                                >
                                    Etiam scelerisque tellus eget enim porta,
                                    nec lobortis turpis ullamcorper. Morbi
                                    faucus egestas sem, a dictum nibh tincidunt
                                    sit amet.
                                </Typography>

                                <Typography
                                    sx={{
                                        letterSpacing: '2px',
                                    }}
                                >
                                    DANIELS FULTON
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography
                                    sx={{
                                        marginBottom: '30px',
                                        lineHeight: '1.7',
                                    }}
                                >
                                    Nulla nibh eros, malesuada non scelerisque
                                    et, laoreet non sapien. Donec mollis tempus
                                    tortor, vitae rhoncus metus estas
                                    ullamcorper. Maecenas eros tellus, volutpat
                                    sed ante in, ullamcorper venenatis tortor.
                                    Suspendisse tincidunt dapibus arcu et
                                    vulputate. Praesent tempus pulvinar cursus.
                                    Praesent erat nisi, malesuada varius dui ut,
                                    ultricies laoreet dui. Sed gravida pulvinar
                                    urna, vel tincidunt ante. Praesent interdum,
                                    urna ac egestas vehicula, nisl nunc ornare
                                    verra orci tellus id eros.
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography
                                    sx={{
                                        marginBottom: '30px',
                                        lineHeight: '1.7',
                                    }}
                                >
                                    Nulla facilisi. Donec sodales diam enim, a
                                    dignissim nunc facilisis nec. Pellentes
                                    tellus lorem. Phasellus ultrices consectetur
                                    magna, ut gravida arcu pulvinar sit amet.
                                    Vivamus ultrices porttitor mauris, at mattis
                                    neque elementum vel. Suspendisse magna
                                    sapien, dignissim vel tortor ut, hendrerit
                                    pellentesque velit. Mauris porttitor maximus
                                    gilla massa imperdiet in.
                                </Typography>
                            </Grid>
                            <Grid item md={12} container>
                                <Grid item md={3} sx={{ padding: '10px' }}>
                                    <span>October 1, 2020</span>
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    sx={{
                                        padding: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Icon
                                </Grid>
                                <Grid
                                    item
                                    md={3}
                                    sx={{
                                        padding: '10px',
                                        textAlign: 'right',
                                    }}
                                >
                                    <span>WRITE A COMMENT</span>
                                </Grid>
                            </Grid>
                            <CommentsForm />
                        </Grid>
                    </Grid>
                    <Grid item md={3}>
                        <GritContainerScrolling />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PageProto
