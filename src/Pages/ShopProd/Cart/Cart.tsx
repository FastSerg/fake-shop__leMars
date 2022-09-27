import React from 'react'
import './Cart.scss'
import {
    arrProducts,
    ArrProductsProps,
    getProductObject,
} from '../../../components/Arrays/arraysProducts'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import CartItemProd from './CartItemProd'
import { useAppSelector } from 'redux/hooks'

type Props = {
    productsInCart: { [id: number]: number }
    productObject?: { [id: number]: ArrProductsProps }
}

const Cart = ({
    productObject = getProductObject(arrProducts),
    productsInCart,
}: Props) => {
    const productsInCart1 = useAppSelector((state) => state.cartProductsState)
    console.log(productsInCart1)
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
                    {Object.keys(productsInCart1).map((productId) => (
                        <CartItemProd
                            key={parseInt(productId)}
                            img={productObject[parseInt(productId)].img}
                            count={productsInCart1[parseInt(productId)]}
                            alt={productObject[parseInt(productId)].alt}
                            price={productObject[parseInt(productId)].price}
                            nameProduct={
                                productObject[parseInt(productId)].nameProduct
                            }
                        />
                    ))}
                    <div className="coupon">
                        {/* submit={couponSubmit} */}
                        <form>
                            <input
                                type="text"
                                name="coupon_code"
                                className="coupon-input"
                                id="coupon_code"
                                // value=""
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
                    <div className="cart-box">
                        <div className="cart-total">
                            <div className="total-title">Cart Totals</div>
                            <div className="subtotal">
                                <span className="cart-title">Subtotal</span>
                                <span className="price">£ pice</span>{' '}
                            </div>
                            <div className="total">
                                <span className="cart-title">Total</span>
                                <span className="price">£ pice</span>
                            </div>
                            <div className="btn-box">
                                <button className="btn-total">
                                    Proceed To Checkout
                                </button>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
