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

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const Products = ({ active, changeState }: Props) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const changeBoolean = (modalActive: boolean) => {
        setModalActive(true)
    }

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
                                {arrProducts.map(
                                    ({
                                        id,
                                        img,
                                        alt,
                                        nameProduct,
                                        price,
                                        discount,
                                    }: ArrProductsProps) => (
                                        <Grid item md={4} key={id}>
                                            <div className="products">
                                                <div className="product-list">
                                                    <img src={img} alt={alt} />
                                                    <div className="overlay-product"></div>
                                                    <div
                                                        className={
                                                            discount ===
                                                            undefined
                                                                ? 'd-none'
                                                                : 'discount'
                                                        }
                                                    >
                                                        <span className="discount-value">
                                                            {discount}%
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <h5>{nameProduct}</h5>
                                                    <span className="price">
                                                        {' '}
                                                        £{price}
                                                    </span>
                                                </div>
                                            </div>
                                        </Grid>
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
