import React from 'react'
import { CardMedia, Card, CardContent, Typography, Grid } from '@mui/material'
import { ArraysAllProps } from '../../../../../components/Arrays/arraysAll'
import { Link } from 'react-router-dom'

const ItemHeaderMenu = ({
    id,
    img,
    alt,
    text,
    nameCategory,
    title,
    namePage,
}: ArraysAllProps) => {
    return (
        <>
            <Grid container>
                <Card>
                    <Link to={`/${namePage}`}>
                        <CardMedia
                            component="img"
                            height="170px"
                            image={img}
                            alt={alt}
                            sx={{ width: '220px', backgroundSize: 'cover' }}
                        />
                    </Link>
                    <CardContent>
                        <Typography
                            sx={{
                                fontSize: '12px',
                                marginBottom: '5px',
                                fontWeight: '600',
                                color: 'red',
                                textAlign: 'center',
                                letterSpacing: '5px',
                            }}
                            variant="h6"
                            component="div"
                        >
                            {nameCategory}
                        </Typography>
                        <Typography
                            variant="inherit"
                            color="#2b2d2e"
                            sx={{
                                fontSize: '12px',
                                marginBottom: '5px',
                                fontWeight: '600',
                                textAlign: 'center',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#77797c',
                                lineHeight: '16px',
                                marginBottom: '10px',
                                textAlign: 'center',
                            }}
                        >
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default ItemHeaderMenu
