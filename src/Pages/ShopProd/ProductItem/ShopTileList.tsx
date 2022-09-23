import React from 'react'
import { Grid } from '@mui/material'
import { ArrProductsProps } from '../../../components/Arrays/arraysProducts'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'

const ShopTileList = ({
    id,
    img,
    alt,
    discount,
    nameProduct,
    price,
}: ArrProductsProps) => {
    return (
        <Grid item md={4} key={id}>
            <div className="products">
                <div className="product-list">
                    <img src={img} alt={alt} />
                    {/* <AddShoppingCartOutlinedIcon
                        classes={'product-list'}
                        sx={{
                            fontSize: '38px',
                            padding: '10px',
                            border: '1px solid black',
                            borderRadius: '20px',
                            position: 'absolute',
                            top: '50%',
                            left: '45%',
                            opacity: '0',
                        }}
                    /> */}
                    <div className="overlay-product"></div>
                    <div
                        className={
                            discount === undefined ? 'd-none' : 'discount'
                        }
                    >
                        <span className="discount-value">{discount}%</span>
                    </div>
                </div>
                <div className="product-info">
                    <h5>{nameProduct}</h5>
                    <span className="price">
                        {discount ? (
                            <span className="price-sale">
                                £{price + (price * discount) / 100}
                            </span>
                        ) : null}
                        £{price.toFixed(2)}
                    </span>
                </div>
            </div>
        </Grid>
    )
}

export default ShopTileList
