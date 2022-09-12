import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'
import GridContainerBottom from 'container/Main/GridContainerBottom'
import GritContainerScrolling from 'container/Main/ScrollMenu/GritContainerScrolling'
import CommentsForm from '../CommentsForm/CommentsForm'

type Props = {}

const StylingHarvey = (props: Props) => {
    return (
        <div className="container">
            <Grid
                container
                spacing={1}
                sx={{
                    paddingTop: '20px',
                    marginTop: '160px',
                }}
            >
                <Grid item md={9}>
                    <Grid container sx={{ maxWidth: '850px' }}>
                        <Grid item md={12}>
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
                                        height="1270px"
                                        image="/img/horse.jpg"
                                        alt="ledy_in_white"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>{' '}
                        <Grid item md={12}>
                            <p>
                                Donec sed lacus eu massa commodo interdum non id
                                mauris. Etiam eu dignissim elit. Nulla cursus
                                neque adictum quam tristique ac. Pellentesque
                                habitant morbi tristique senectus et netus
                                lalesuada fames ac turpis egestas. Donec ornare
                                enim felis, non faucibus eros mattis vel.
                                Suspendisse sollicitudin, nisi non interdum
                                pharetra, libero lectus sollicitudin est, quis
                                imperdiet nibh nulla non metus. Fusce accumsan
                                in leo eu porttitor. Sed eget neque aliquam
                                sequat bibendum.
                            </p>
                        </Grid>
                        <Grid
                            item
                            md={12}
                            sx={{
                                padding: '0 20px 0 40px',
                                fontSize: '17px',
                                color: '#2b2d2e',
                                lineHeight: '30px',
                                clear: 'both',
                            }}
                        >
                            <p>
                                Etiam scelerisque tellus eget enim porta, nec
                                lobortis turpis ullamcorper. Morbi faucus
                                egestas sem, a dictum nibh tincidunt sit amet.
                            </p>

                            <p>DANIELS FULTON</p>
                        </Grid>
                        <Grid item md={12}>
                            <p>
                                Nulla nibh eros, malesuada non scelerisque et,
                                laoreet non sapien. Donec mollis tempus tortor,
                                vitae rhoncus metus estas ullamcorper. Maecenas
                                eros tellus, volutpat sed ante in, ullamcorper
                                venenatis tortor. Suspendisse tincidunt dapibus
                                arcu et vulputate. Praesent tempus pulvinar
                                cursus. Praesent erat nisi, malesuada varius dui
                                ut, ultricies laoreet dui. Sed gravida pulvinar
                                urna, vel tincidunt ante. Praesent interdum,
                                urna ac egestas vehicula, nisl nunc ornare verra
                                orci tellus id eros.
                            </p>
                        </Grid>
                        <Grid item md={12}>
                            <p>
                                Nulla facilisi. Donec sodales diam enim, a
                                dignissim nunc facilisis nec. Pellentes tellus
                                lorem. Phasellus ultrices consectetur magna, ut
                                gravida arcu pulvinar sit amet. Vivamus ultrices
                                porttitor mauris, at mattis neque elementum vel.
                                Suspendisse magna sapien, dignissim vel tortor
                                ut, hendrerit pellentesque velit. Mauris
                                porttitor maximus gilla massa imperdiet in.
                            </p>
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
                                sx={{ padding: '10px', textAlign: 'right' }}
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

            <div className="container bottom">
                <GridContainerBottom />
            </div>
        </div>
    )
}

export default StylingHarvey
