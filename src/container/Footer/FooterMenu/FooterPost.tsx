import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {}

const FooterPost = (props: Props) => {
    return (
        <Grid item md={3} sm={12}>
            <Grid container spacing={2}>
                <Grid item md={12} sm={12}>
                    <h6 className="widget-title ">RECENT POST</h6>
                </Grid>
                <Grid
                    item
                    md={6}
                    sm={2}
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

                <Grid item md={6} sm={2}>
                    <Link to={'/storyOfBeauty'}>
                        <div className="widget-post-info">
                            <div>Story Of Beauty</div>
                            <div>OCT 1, 2022</div>
                        </div>
                    </Link>
                </Grid>
                <Grid
                    item
                    sm={2}
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

                <Grid item md={6} sm={2}>
                    <Link to={'/everything'}>
                        <div className="widget-post-info">
                            <div>Everything About Cultural</div>
                            <div>OCT 1, 2022</div>
                        </div>
                    </Link>
                </Grid>
                <Grid
                    item
                    md={6}
                    sm={2}
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
                <Grid item md={6} sm={2}>
                    <Link to={'/catalines'}>
                        <div className="widget-post-info">
                            <div>Las Catalines Welcome</div>
                            <div>OCT 1, 2022</div>
                        </div>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FooterPost
