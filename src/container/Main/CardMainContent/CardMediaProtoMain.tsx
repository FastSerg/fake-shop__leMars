import React from 'react'
import {
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'
import { arrMainPageProps } from './arrGridContainerMain'

const CardMediaProtoMain = ({
    id,
    img,
    alt,
    text,
    nameCategory,
    title,
}: arrMainPageProps) => {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    image={img}
                    alt={alt}
                />
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
                        {nameCategory}
                    </Typography>
                    <Typography
                        variant="inherit"
                        color="#2b2d2e"
                        sx={{
                            fontSize: '20px',
                            marginBottom: '10px',
                            fontWeight: '600',
                            textAlign: 'center',
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '15px',
                            color: '#77797c',
                            lineHeight: '24px',
                            marginBottom: '24px',
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

export default CardMediaProtoMain
