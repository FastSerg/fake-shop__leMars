import React, { Fragment } from 'react'
import './Cart.scss'
import {
    arrProducts,
    ArrProductsProps,
    getProductObject,
} from '../../../components/Arrays/arraysProducts'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import CartItemProd from './CartItemProd'
import { useAppSelector } from 'redux/hooks'
import CartTotal from './CartTotal'

type Props = {
    productObject?: { [id: number]: ArrProductsProps }
}

const Cart = ({ productObject = getProductObject(arrProducts) }: Props) => {
    const productsInCart = useAppSelector((state) => state.cartProductsState)
    const totalCount = useAppSelector((state) => state.cartProductsState)

    return (
        <>
            <div className="container-pages">
                <div className="container">
                    <div
                        className="message-container"
                        style={{ display: 'none' }}
                    >
                        <h5 className="message">fsdf</h5>
                    </div>
                    <div className="cart-container">
                        <span> </span>
                        <div className="cart-title">Product</div>
                        <div className="cart-title">Price</div>
                        <div className="cart-title">Quantity</div>
                        <div className="cart-title">Total</div>
                        <span></span>
                    </div>
                    {Object.keys(productsInCart).map((productId) => (
                        <Fragment key={parseInt(productId)}>
                            <CartItemProd
                                id={parseInt(productId)}
                                img={productObject[parseInt(productId)].img}
                                count={productsInCart[parseInt(productId)]}
                                alt={productObject[parseInt(productId)].alt}
                                price={productObject[parseInt(productId)].price}
                                nameProduct={
                                    productObject[parseInt(productId)]
                                        .nameProduct
                                }
                            />
                        </Fragment>
                    ))}

                    <div className="coupon">
                        {/* submit={couponSubmit} */}
                        <form>
                            <input
                                type="text"
                                name="coupon_code"
                                className="coupon-input"
                                id="coupon_code"
                                placeholder="Coupon code"
                            />{' '}
                            <button type="submit" className="coupon-btn">
                                Apply coupon
                            </button>
                        </form>
                        <button type="submit" className="coupon-btn">
                            Update Cart
                        </button>
                    </div>
                    <CartTotal
                        total={Object.keys(productsInCart).reduce(
                            (total, productId) =>
                                total +
                                productObject[parseInt(productId)].price *
                                    totalCount[parseInt(productId)],
                            0
                        )}
                    />
                </div>
            </div>
        </>
    )
}

export default Cart
