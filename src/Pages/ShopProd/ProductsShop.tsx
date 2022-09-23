import ButtonFixed from 'components/ButtonFixed/ButtonFixed'
import HeaderTop from 'components/HeaderTopComponent/HeaderTop'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import ModalWindow from 'Pages/Subscribe/ModalWindow'
import Subscribe from 'Pages/Subscribe/Subscribe'
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

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const Products = ({ active, changeState }: Props) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const changeBoolean = (modalActive: boolean) => {
        setModalActive(true)
    }

    const [activeProd, setActiveProd] = useState<boolean>(false)
    return (
        <>
            <HeaderTop
                setModalActive={changeBoolean}
                active={active}
                changeState={changeState}
            />
            <ShopBg />

            <div className="container-pages">
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

                                {arrProducts.map(
                                    ({
                                        id,
                                        img,
                                        alt,
                                        nameProduct,
                                        price,
                                        discount,
                                    }: ArrProductsProps) =>
                                        activeProd ? (
                                            <ShopListContent
                                                id={id}
                                                img={img}
                                                alt={alt}
                                                nameProduct={nameProduct}
                                                price={price}
                                                discount={discount}
                                            />
                                        ) : (
                                            <ShopTileList
                                                id={id}
                                                img={img}
                                                alt={alt}
                                                nameProduct={nameProduct}
                                                price={price}
                                                discount={discount}
                                            />
                                        )
                                )}
                            </Grid>
                        </Grid>
                        <Grid item md={3}>
                            <ShopScrollItem />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Subscribe active={modalActive} setActive={setModalActive}>
                <ModalWindow />
            </Subscribe>
            <div className="container bottom">
                <GridContainerBottom />
            </div>
            <ButtonFixed />
        </>
    )
}
export default Products
