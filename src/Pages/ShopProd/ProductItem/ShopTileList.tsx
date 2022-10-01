import React from 'react'
import { Grid } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { addCart } from 'redux/productsCartReducer'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { changeStateButtons } from 'redux/buttonsLikeState'

type Props = {
    id: number
    img: string
    alt: string
    discount?: number
    nameProduct: string
    price: number
}

const ShopTileList = ({
    id,
    img,
    alt,
    discount,
    nameProduct,
    price,
}: Props) => {
    const dispatch = useAppDispatch()
    const cartShowState = useAppSelector((state) => state.buttonsState)

    return (
        <Grid item md={4} key={id}>
            <div className="products">
                <div
                    className="product-list"
                    onMouseEnter={() => dispatch(changeStateButtons(id))}
                    onMouseLeave={() => dispatch(changeStateButtons(id))}
                >
                    <img src={img} alt={alt} />

                    <AddShoppingCartOutlinedIcon
                        onClick={() => dispatch(addCart(id))}
                        sx={
                            cartShowState[id]
                                ? {
                                      fontSize: '38px',
                                      padding: '5px',
                                      border: '1px solid white',
                                      borderRadius: '20px',
                                      position: 'absolute',
                                      color: 'white',
                                      top: '50%',
                                      left: '45%',
                                      opacity: '2',
                                      cursor: 'pointer',
                                      zIndex: '11',
                                  }
                                : {
                                      fontSize: '38px',
                                      padding: '10px',
                                      border: '1px solid white',
                                      borderRadius: '20px',
                                      position: 'absolute',
                                      color: 'white',
                                      top: '50%',
                                      left: '45%',
                                      opacity: '0',
                                      zIndex: '0',
                                      cursor: 'pointer',
                                  }
                        }
                    />

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
