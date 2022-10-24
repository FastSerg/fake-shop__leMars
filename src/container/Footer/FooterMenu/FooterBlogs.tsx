import React from 'react'
import { Grid, CardMedia, Card } from '@mui/material'

type Props = {}

const FooterBlogs = (props: Props) => {
    return (
        <Grid item md={4} sm={12}>
            <Grid container spacing={2}>
                <Grid item md={12} sm={12}>
                    <h6 className="widget-title">MY BLOGS</h6>
                </Grid>
                <Grid
                    item
                    md={12}
                    sm={12}
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
    )
}

export default FooterBlogs
