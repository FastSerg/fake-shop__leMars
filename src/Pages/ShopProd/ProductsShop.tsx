import React, { useState } from 'react'
import './Shop.scss'
import ShopBg from './ProductItem/ShopBg'
import { Grid, Typography } from '@mui/material'
import {
    arrProducts,
    ArrProductsProps,
} from '../../components/Arrays/arraysProducts'
import ShopScrollItem from './ProductItem/ShopScrollItem'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import SelectedControl from './ProductItem/SelectedControl'
import ShopTileList from './ProductItem/ShopTileList'
import ShopListContent from './ProductItem/ShopListContent'

type Props = {}

const Products = (props: Props) => {
    const [activeProd, setActiveProd] = useState<boolean>(false)

    return (
        <>
            <ShopBg />
            <div className="container">
                <Grid container sx={{ padding: '50px 0' }} spacing={2}>
                    <Grid item md={12}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                textAlign: 'center',
                                marginBottom: '50px',
                            }}
                        >
                            Product
                        </Typography>
                    </Grid>
                    <Grid item md={9}>
                        <Grid container spacing={3}>
                            <Grid item md={8} sx={{ marginBottom: '30px' }}>
                                <SelectedControl />
                            </Grid>
                            <Grid
                                item
                                md={4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    gap: '10px',
                                    marginBottom: '30px',
                                }}
                            >
                                <FormatListBulletedOutlinedIcon
                                    onClick={() => setActiveProd(false)}
                                    sx={
                                        activeProd
                                            ? {
                                                  fontSize: '40px',
                                                  padding: '8px',
                                                  cursor: 'pointer',
                                                  border: '1px solid #999b9d',
                                              }
                                            : {
                                                  fontSize: '40px',
                                                  padding: '8px',
                                                  cursor: 'pointer',
                                                  border: '1px solid #999b9d',
                                                  color: 'white',
                                                  bgcolor: 'black',
                                              }
                                    }
                                />
                                <GridViewOutlinedIcon
                                    onClick={() => setActiveProd(true)}
                                    sx={
                                        activeProd
                                            ? {
                                                  fontSize: '40px',
                                                  backgroundColor: 'black',
                                                  color: 'white',
                                                  padding: '10px',
                                                  cursor: 'pointer',
                                              }
                                            : {
                                                  fontSize: '40px',
                                                  color: 'black',
                                                  padding: '10px',
                                                  cursor: 'pointer',
                                                  border: '1px solid #999b9d',
                                              }
                                    }
                                />
                            </Grid>

                            {arrProducts
                                // .sort((a, b) => (a.price > b.price ? 1 : -1))
                                .map(
                                    ({
                                        id,
                                        img,
                                        alt,
                                        nameProduct,
                                        price,
                                        discount,
                                    }: ArrProductsProps) =>
                                        activeProd ? (
                                            <React.Fragment key={id}>
                                                <ShopListContent
                                                    id={id}
                                                    img={img}
                                                    alt={alt}
                                                    nameProduct={nameProduct}
                                                    price={price}
                                                    discount={discount}
                                                />
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment key={id}>
                                                <ShopTileList
                                                    id={id}
                                                    img={img}
                                                    alt={alt}
                                                    nameProduct={nameProduct}
                                                    price={price}
                                                    discount={discount}
                                                />
                                            </React.Fragment>
                                        )
                                )}
                        </Grid>
                    </Grid>
                    <Grid item md={3}>
                        <ShopScrollItem />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Products
