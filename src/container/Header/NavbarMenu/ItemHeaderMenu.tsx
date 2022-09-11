import React from 'react'
import {
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'

import { arrMainPageProps } from '../../Main/CardMainContent/arrGridContainerMain'

type Props = {}

const ItemHeaderMenu = ({
    id,
    img,
    alt,
    text,
    nameCategory,
    title,
}: arrMainPageProps) => {
    return (
        <Card sx={{ maxWidth: '100%', marginTop: '10px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150px"
                    image={img}
                    alt={alt}
                />
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
            </CardActionArea>
        </Card>
    )
}

export default ItemHeaderMenu
