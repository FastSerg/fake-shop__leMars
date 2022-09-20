import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
    Button,
    TextField,
} from '@mui/material'
import EditLocationIcon from '@mui/icons-material/EditLocation'
import LanguageIcon from '@mui/icons-material/Language'
import SendToMobileIcon from '@mui/icons-material/SendToMobile'
import { Social } from 'container/Header/Social'

type Props = {}

const ContactContent = (props: Props) => {
    return (
        <>
            {' '}
            <Grid
                container
                spacing={1}
                sx={{
                    paddingTop: '20px',
                    marginTop: '160px',
                }}
            >
                <Grid
                    item
                    md={12}
                    sx={{
                        marginBottom: '30px',
                    }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                variant="inherit"
                                color="#2b2d2e"
                                sx={{
                                    fontSize: '62px',
                                    lineHeight: '72px',
                                    letterSpacing: '5px',
                                    marginBottom: '10px',
                                    textAlign: 'center',
                                }}
                            >
                                Contact Me
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="605px"
                            image="/img/contactMe.jpg"
                            alt="contactMe"
                        />
                    </CardActionArea>
                </Grid>{' '}
                <Grid container spacing={4}>
                    <Grid item md={9}>
                        {/* onSubmit={onSend} */}
                        <form>
                            <Grid container spacing={1}>
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        label="Author"
                                        placeholder="Author"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        // value={newComment.name}
                                        // onChange={heandlerChangeName}
                                    />
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        placeholder="Email"
                                        variant="outlined"
                                        fullWidth
                                        // value={newComment.email}
                                        // onChange={heandlerChangeEmail}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        label="Message"
                                        rows={5}
                                        multiline
                                        placeholder="Type Comment Here"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        // value={newComment.text}
                                        // onChange={heandlerChangeText}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={12}
                                    sx={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            borderRadius: '20px',
                                            background: 'black',
                                        }}
                                    >
                                        SEND MESSAGE
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item md={3}>
                        <Grid container>
                            <Grid
                                item
                                md={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                {' '}
                                <Typography
                                    variant="inherit"
                                    color="#201f22"
                                    sx={{
                                        display: 'flex',
                                        fontSize: '12px',
                                        fontWeight: '600',

                                        marginBottom: '10px',
                                    }}
                                >
                                    ADDITIONAL INFO
                                </Typography>{' '}
                            </Grid>

                            <Grid item md={12} sx={{ display: 'flex' }}>
                                <Grid
                                    item
                                    md={2}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <EditLocationIcon />{' '}
                                </Grid>
                                <Grid item md={10}>
                                    {' '}
                                    <Typography
                                        variant="inherit"
                                        color="#2b2d2e"
                                        sx={{
                                            borderBottom: '1px solid #e5e8ea',
                                            padding: '14px 0',
                                            fontSize: '15px',
                                            color: '#77797c',
                                        }}
                                    >
                                        New York, USA
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={12} sx={{ display: 'flex' }}>
                                <Grid
                                    item
                                    md={2}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <LanguageIcon />{' '}
                                </Grid>
                                <Grid item md={10}>
                                    {' '}
                                    <Typography
                                        variant="inherit"
                                        color="#2b2d2e"
                                        sx={{
                                            borderBottom: '1px solid #e5e8ea',
                                            padding: '14px 0',
                                            fontSize: '15px',
                                            color: '#77797c',
                                        }}
                                    >
                                        writeme@lamars.com
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={12} sx={{ display: 'flex' }}>
                                <Grid
                                    item
                                    md={2}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <SendToMobileIcon />{' '}
                                </Grid>
                                <Grid item md={10}>
                                    {' '}
                                    <Typography
                                        variant="inherit"
                                        color="#2b2d2e"
                                        sx={{
                                            borderBottom: '1px solid #e5e8ea',
                                            padding: '14px 0',
                                            fontSize: '15px',
                                            color: '#77797c',
                                        }}
                                    >
                                        (001) 222-3344
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                sx={{
                                    marginTop: '30px',
                                }}
                            >
                                <Social />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ContactContent
