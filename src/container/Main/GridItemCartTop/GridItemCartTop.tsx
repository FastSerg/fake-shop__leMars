import React from 'react'
import { Grid, CardActionArea, CardMedia, Card } from '@mui/material'
import CardMediaProto from '../CartMediaTop/CardMediaProtoTop'
import { Link } from 'react-router-dom'

type Props = {}

const GridItemCartTop = (props: Props) => {
    return (
        <>
            <Grid container spacing={2} sx={{ marginBottom: '60px' }}>
                <Grid item md={6}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="/img/man_with_bag.jpg"
                                alt="man_with_bag"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6}>
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

                <Grid item md={4}>
                    <CardMediaProto
                        catagory={'FASHION'}
                        img={'/img/wooman_legs.jpg'}
                        alt={'man_with_bag'}
                        text={'Ready for the Summer'}
                    />
                </Grid>
                <Grid item md={4}>
                    <CardMediaProto
                        catagory={'LIFESTYLE'}
                        img={'/img/sity_palm.jpg'}
                        alt={'man_with_bag'}
                        text={'Sonoma Valley Lancome'}
                    />
                </Grid>
                <Grid item md={4}>
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
