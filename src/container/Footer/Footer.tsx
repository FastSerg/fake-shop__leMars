import React from 'react'
import './Footer.scss'
import { LogoFooter } from './LogoFooter'
import { Grid, CardMedia, Card } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer-site">
            <div className="footer-top">
                <div className="footer-container">
                    <Grid container spacing={2}>
                        <Grid item md={2}>
                            <LogoFooter />
                        </Grid>
                        <Grid item md={4}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <h6 className="widget-title ">
                                        <span>RECENT POST</span>
                                    </h6>
                                </Grid>
                                <Grid item md={6}>
                                    <Card sx={{ maxWidth: '80px' }}>
                                        <CardMedia
                                            component="img"
                                            height="80px"
                                            image="/img/ledy_in_white.jpg"
                                            alt="wooman in white"
                                        />
                                    </Card>
                                </Grid>
                                <Grid item md={6}>
                                    <div className="widget-post-info">
                                        <div>Story Of Beaty</div>
                                        <div>OCT 1, 2022</div>
                                    </div>
                                </Grid>

                                <Grid item md={6}>
                                    <Card sx={{ maxWidth: '80px' }}>
                                        <CardMedia
                                            component="img"
                                            height="80px"
                                            image="/img/wooman_near_water.jpg"
                                            alt="wooman in white"
                                        />
                                    </Card>
                                </Grid>
                                <Grid item md={6}>
                                    <div className="widget-post-info">
                                        <div>Story Of Beaty</div>
                                        <div>OCT 1, 2022</div>
                                    </div>
                                </Grid>

                                <Grid item md={6}>
                                    <Card sx={{ maxWidth: '80px' }}>
                                        <CardMedia
                                            component="img"
                                            height="80px"
                                            image="/img/wooman_in_bike.jpg"
                                            alt="wooman_in_bike"
                                        />
                                    </Card>
                                </Grid>
                                <Grid item md={6}>
                                    <div className="widget-post-info">
                                        <div>Story Of Beaty</div>
                                        <div>OCT 1, 2022</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <h6 className="widget-title">
                                        <span>MY BLOGS</span>
                                    </h6>
                                </Grid>
                                <Grid
                                    item
                                    md={12}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Card sx={{ maxWidth: '240px' }}>
                                        <CardMedia
                                            component="img"
                                            height="150px"
                                            image="/img/man_in_bike.jpg"
                                            alt="wooman in white"
                                        />
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={2}>
                            <Grid item md={12}>
                                <h6 className="widget-title">
                                    <span>SOCIAL ICON</span>
                                </h6>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '20px',
                                }}
                            >
                                <FacebookIcon sx={{ fontSize: '2rem' }} />
                                <TwitterIcon sx={{ fontSize: '2rem' }} />
                                <LinkedInIcon sx={{ fontSize: '2rem' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="footer-bottom">
                <Grid item md={12} sx={{ textAlign: 'center' }}>
                    <span>© 2022 All Rights Reserved.</span>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
