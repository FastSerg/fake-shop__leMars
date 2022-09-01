import React from 'react'
import './Footer.scss'
import { LogoFooter } from './LogoFooter'
import { Grid, Box } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer-site">
            <div className="footer-top">
                <div className="footer-container">
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item xs={2} md={2}>
                                <LogoFooter />
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <div className="widget-post-bx">
                                    <ImageList
                                        sx={{ width: 90, height: 90 }}
                                        cols={1}
                                    >
                                        <ImageListItem>
                                            <img
                                                src="/img/ledy_in_white.jpg"
                                                alt="wooman in white"
                                            />
                                        </ImageListItem>
                                    </ImageList>

                                    <div className="widget-post-info">
                                        <div>Story Of Beaty</div>
                                        <div>OCT 1, 2022</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                xs=6 md=4
                            </Grid>
                            <Grid item xs={2} md={2}>
                                xs=6 md=8
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="footer-bottom"></div>
        </div>
    )
}

export default Footer
{
    /*<div className="site-colums">
                        <div className="site-name">
                            <LogoFooter />
                        </div>
                        <div className="site-post">
                            <div className="widget-column">
                                <h6 className="title-column"></h6>
                                <div className="column-list">
                                    <div className="widget-post">
                                        <div className="widget-post-bx">
                                            <div className="widget-post-media">
                                                <img
                                                    src="/img/ledy_in_white.jpg"
                                                    alt="wooman in white"
                                                />
                                            </div>
                                            <div className="widget-post-info">
                                                <div>Story Of Beaty</div>
                                                <div>OCT 1, 2022</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="site-blogs">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi ipsa, molestiae, fuga modi obcaecati
                            commodi quia rerum doloremque impedit, amet sed
                            libero enim ullam. Doloremque laudantium id
                            asperiores pariatur rem.
                        </div>
                        <div className="site-social">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi ipsa, molestiae, fuga modi obcaecati
                            commodi quia rerum doloremque impedit, amet sed
                            libero enim ullam. Doloremque laudantium id
                            asperiores pariatur rem.
                        </div>
                    </div>  */
}
