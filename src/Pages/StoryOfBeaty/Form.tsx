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

const Form = (props: Props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: '700',
                            letterSpacing: '2.5px',
                            textAlign: 'center',
                            marginBottom: '25px',
                        }}
                    >
                        LEAVE A REPLY
                    </Typography>
                    <Typography
                        gutterBottom
                        color="textSecondary"
                        variant="body2"
                        component="p"
                    >
                        `Your email address will not be published. Required
                        fields are marked *`
                    </Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item md={6} sm={12}>
                                <TextField
                                    label="Author"
                                    placeholder="Author"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    placeholder="Email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Message"
                                    rows={4}
                                    multiline
                                    placeholder="Type Comment Here"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item md={12} sx={{ marginTop: '10px' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        borderRadius: '20px',
                                        background: 'black',
                                    }}
                                >
                                    Post Comment
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Form
