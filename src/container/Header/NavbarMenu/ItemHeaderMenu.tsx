import React from 'react'
import {
    Grid,
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
} from '@mui/material'

// const categoryList: CategoryProps[] = [
//     { name: 'All', id: 1 },
//     { name: 'BEAUTY', id: 2 },
//     { name: 'FASHION', id: 3 },
//     { name: 'LIFESTYLE', id: 4 },
//     { name: 'TRAVEL', id: 5 },
// ]
// type CategoryProps = { name: string; id: number }
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
