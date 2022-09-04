import React from 'react'
import {
    Grid,
    CardMedia,
    Card,
    Typography,
    Box,
    TextField,
    IconButton,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { Social } from '../Header/Social'
import './GridContainerScrolling.scss'

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
                <div className="fon-scroll">
                    <Grid item md={12}>
                        <Grid
                            container
                            spacing={1}
                            sx={{ alignItems: 'center' }}
                        >
                            <Grid item md={12} sx={{ textAlign: 'center' }}>
                                <Typography>Join</Typography>
                            </Grid>
                            <Grid item md={10}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {
                                            m: 1,
                                            width: '100%',
                                        },

                                        textAlign: 'center',
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="filled-basic"
                                        label="Your Email"
                                        variant="filled"
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={2}>
                                <IconButton
                                    aria-label="fingerprint"
                                    color="inherit"
                                    sx={{
                                        marginLeft: '-55px',
                                    }}
                                >
                                    <SendIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
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
