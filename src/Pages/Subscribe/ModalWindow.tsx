import React from 'react'
import {
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    Button,
} from '@mui/material'

type Props = {}

const ModalWindow = (props: Props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography
                        sx={{
                            fontSize: '28px',
                            fontWeight: '600',
                            letterSpacing: '2.5px',
                            textAlign: 'center',
                            marginBottom: '25px',
                        }}
                    >
                        Join Us To Day
                    </Typography>
                    <Typography
                        gutterBottom
                        color="textSecondary"
                        variant="body2"
                        component="p"
                    >
                        Receive Only The Best Posts Via Email
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <TextField
                                    label="Name"
                                    placeholder="Your Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    placeholder="Your Email Address"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    sx={{
                                        borderRadius: '20px',
                                    }}
                                />
                            </Grid>

                            <Grid item md={12} sx={{ marginTop: '10px' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        background: 'black',
                                        padding: ' 14px 30px',
                                    }}
                                >
                                    SUBSCRIBE
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default ModalWindow
