import React from 'react'
import { Grid, CardActionArea, CardMedia, Card } from '@mui/material'
import CardMediaProto from '../CartMediaTop/CardMediaProtoTop'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Props = {}

const GridItemCartTop = (props: Props) => {
    const MCartTop = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: number) => ({
            opacity: 1,
            transition: { duration: 2, delay: custom * 0.2 },
        }),
    }
    return (
        <>
            <Grid
                component={motion.div}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{ amount: 0.2, once: true }}
                container
                spacing={2}
                sx={{ marginBottom: '60px' }}
            >
                <Grid
                    item
                    md={6}
                    component={motion.div}
                    variants={MCartTop}
                    custom={1}
                >
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <Link to="/newLook">
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/man_with_bag.jpg"
                                    alt="man_with_bag"
                                />
                            </Link>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid
                    item
                    md={6}
                    component={motion.div}
                    variants={MCartTop}
                    custom={1}
                >
                    <div className="blog-cart">
                        <div className="blog-cart__info">
                            <div className="title-top">
                                <h5>Lifestyle</h5>
                            </div>
                            <h4 className="title">Makeup for new Look</h4>
                            <p className="text-align-center">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam imperdiet, orci sed
                                volutpat tempor, nisl massa ullamcorper tortor,
                                vitae vestibulum neque lacus a sem. Donec
                            </p>
                        </div>
                    </div>
                </Grid>

                <Grid
                    item
                    md={4}
                    component={motion.div}
                    variants={MCartTop}
                    custom={3}
                >
                    <Link to={'/summer'}>
                        <CardMediaProto
                            catagory={'FASHION'}
                            img={'/img/wooman_legs.jpg'}
                            alt={'man_with_bag'}
                            text={'Ready for the Summer'}
                        />
                    </Link>
                </Grid>
                <Grid
                    item
                    md={4}
                    component={motion.div}
                    variants={MCartTop}
                    custom={3}
                >
                    <Link to={'/valley'}>
                        <CardMediaProto
                            catagory={'LIFESTYLE'}
                            img={'/img/sity_palm.jpg'}
                            alt={'man_with_bag'}
                            text={'Sonoma Valley Lancome'}
                        />
                    </Link>
                </Grid>
                <Grid
                    item
                    md={4}
                    component={motion.div}
                    variants={MCartTop}
                    custom={3}
                >
                    <Link to={'/creativity'}>
                        <CardMediaProto
                            catagory={'BEAUTY'}
                            img={'/img/man_see.jpg'}
                            alt={'man_with_bag'}
                            text={'New Year Creativity'}
                        />
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default GridItemCartTop
