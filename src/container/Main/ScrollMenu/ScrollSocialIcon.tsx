import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'
import { Social } from '../../Header/Social'

type Props = {}

const ScrollSocialIcon = (props: Props) => {
    return (
        <>
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
        </>
    )
}

export default ScrollSocialIcon
