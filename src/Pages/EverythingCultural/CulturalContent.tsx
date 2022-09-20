import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'
import GritContainerScrolling from 'container/Main/ScrollMenu/GritContainerScrolling'
import CommentsForm from '../CommentsForm/CommentsForm'

type Props = {}

const CulturalContent = (props: Props) => {
    return (
        <Grid
            container
            spacing={1}
            sx={{
                paddingTop: '40px',
                marginLeft: '0',
                marginTop: '10px',
            }}
        >
            <Grid item md={9} sx={{ color: '#77797c' }}>
                <Grid container sx={{ maxWidth: '850px' }}>
                    <Grid item md={12} sx={{ marginBottom: '35px' }}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            lineHeight: '24px',
                                            marginBottom: '10px',
                                            fontWeight: '600',
                                            color: 'red',
                                            textAlign: 'center',
                                            letterSpacing: '5px',
                                        }}
                                        variant="h6"
                                        component="div"
                                    >
                                        TRAVEL
                                    </Typography>

                                    <Typography
                                        variant="inherit"
                                        color="#2b2d2e"
                                        sx={{
                                            fontSize: '42px',
                                            letterSpacing: '5px',
                                            marginBottom: '10px',
                                            fontWeight: '600',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Styling Harvey
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="847px"
                                    image="/img/wooman_near_water.jpg"
                                    alt="wooman_near_water"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>{' '}
                    <Grid item md={12}>
                        <Typography
                            sx={{
                                marginBottom: '20px',
                                lineHeight: '1.7',
                            }}
                        >
                            Donec sed lacus eu massa commodo interdum non id
                            mauris. Etiam eu dignissim elit. Nulla cursus neque
                            adictum quam tristique ac. Pellentesque habitant
                            morbi tristique senectus et netus lalesuada fames ac
                            turpis egestas. Donec ornare enim felis, non
                            faucibus eros mattis vel. Suspendisse sollicitudin,
                            nisi non interdum pharetra, libero lectus
                            sollicitudin est, quis imperdiet nibh nulla non
                            metus. Fusce accumsan in leo eu porttitor. Sed eget
                            neque aliquam sequat bibendum.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={12}
                        sx={{
                            padding: '0 20px 0 40px',
                            color: '#2b2d2e',
                            lineHeight: '30px',
                            clear: 'both',
                            marginBottom: '20px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '17px',
                                marginBottom: '20px',
                                lineHeight: '1.7',
                            }}
                        >
                            Etiam scelerisque tellus eget enim porta, nec
                            lobortis turpis ullamcorper. Morbi faucus egestas
                            sem, a dictum nibh tincidunt sit amet.
                        </Typography>

                        <Typography
                            sx={{
                                letterSpacing: '2px',
                            }}
                        >
                            DANIELS FULTON
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Typography
                            sx={{
                                marginBottom: '30px',
                                lineHeight: '1.7',
                            }}
                        >
                            Nulla nibh eros, malesuada non scelerisque et,
                            laoreet non sapien. Donec mollis tempus tortor,
                            vitae rhoncus metus estas ullamcorper. Maecenas eros
                            tellus, volutpat sed ante in, ullamcorper venenatis
                            tortor. Suspendisse tincidunt dapibus arcu et
                            vulputate. Praesent tempus pulvinar cursus. Praesent
                            erat nisi, malesuada varius dui ut, ultricies
                            laoreet dui. Sed gravida pulvinar urna, vel
                            tincidunt ante. Praesent interdum, urna ac egestas
                            vehicula, nisl nunc ornare verra orci tellus id
                            eros.
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Typography
                            sx={{
                                marginBottom: '30px',
                                lineHeight: '1.7',
                            }}
                        >
                            Nulla facilisi. Donec sodales diam enim, a dignissim
                            nunc facilisis nec. Pellentes tellus lorem.
                            Phasellus ultrices consectetur magna, ut gravida
                            arcu pulvinar sit amet. Vivamus ultrices porttitor
                            mauris, at mattis neque elementum vel. Suspendisse
                            magna sapien, dignissim vel tortor ut, hendrerit
                            pellentesque velit. Mauris porttitor maximus gilla
                            massa imperdiet in.
                        </Typography>
                    </Grid>
                    <Grid item md={12} container>
                        <Grid item md={3} sx={{ padding: '10px' }}>
                            <span>October 1, 2020</span>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            sx={{
                                padding: '10px',
                                textAlign: 'center',
                            }}
                        >
                            Icon
                        </Grid>
                        <Grid
                            item
                            md={3}
                            sx={{
                                padding: '10px',
                                textAlign: 'right',
                            }}
                        >
                            <span>WRITE A COMMENT</span>
                        </Grid>
                    </Grid>
                    <CommentsForm />
                </Grid>
            </Grid>
            <Grid item md={3}>
                <GritContainerScrolling />
            </Grid>
        </Grid>
    )
}

export default CulturalContent
