import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'

type Props = {}

const FooterPost = (props: Props) => {
    return (
        <Grid item md={4}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <h6 className="widget-title ">RECENT POST</h6>
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
    )
}

export default FooterPost
