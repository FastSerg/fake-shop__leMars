import React from 'react'
import { Grid, Typography, Box, TextField, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

type Props = {}

const ScrollForm = (props: Props) => {
    return (
        <div className="fon-scroll">
            <Grid item md={12}>
                <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item md={12} sx={{ textAlign: 'center' }}>
                        <Typography
                            sx={{
                                fontSize: '24px',
                                lineHeight: '34px',
                                fontWeight: '600',
                            }}
                        >
                            Join
                        </Typography>
                    </Grid>
                    <Grid item md={11}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    width: '100%',
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="filled-basic"
                                label="Your Email"
                                variant="filled"
                                type="email"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={1}>
                        <IconButton
                            aria-label="fingerprint"
                            color="inherit"
                            sx={{
                                marginLeft: '-55px',
                            }}
                            type="submit"
                        >
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ScrollForm
