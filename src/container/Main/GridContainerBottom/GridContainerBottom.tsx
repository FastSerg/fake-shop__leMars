import React from 'react'
import { Grid, CardMedia } from '@mui/material'
import FormEmail from 'components/FormEmail/FormEmail'

type Props = {}

const GridContainerBottom = (props: Props) => {
    return (
        <>
            <div className="container">
                <Grid
                    container
                    spacing={1}
                    sx={{
                        paddingTop: '70px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Grid item md={6}>
                        <CardMedia
                            sx={{ padding: ' 0  10px' }}
                            component="img"
                            height="585px"
                            image="/img/girl_in_glass.png"
                            alt="girl_in_glass"
                        />
                    </Grid>
                    <Grid item md={6} sx={{ padding: '0 40px' }}>
                        <h2 className="title-form-bottom">
                            Subscribe to My Blog
                        </h2>
                        <FormEmail />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default GridContainerBottom
