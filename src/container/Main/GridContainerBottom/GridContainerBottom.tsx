import React from 'react'
import {
    Grid,
    Card,
    CardMedia,
    TextField,
    IconButton,
    Box,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

type Props = {}

const GridContainerBottom = (props: Props) => {
    return (
        <>
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
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardMedia
                            sx={{ padding: ' 0  10px' }}
                            component="img"
                            height="585px"
                            image="/img/girl_in_glass.png"
                            alt="girl_in_glass"
                        />
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <h2 className="title-form-bottom">Subscribe to My Blog</h2>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            alignItems: 'center',
                        }}
                    >
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
                                sx={{ marginLeft: '-55px' }}
                            >
                                <SendIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default GridContainerBottom
