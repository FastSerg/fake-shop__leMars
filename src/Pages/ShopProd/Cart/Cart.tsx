import React, { Fragment } from 'react'
import './Cart.scss'
import {
    ArrProductsProps,
    getProductObject,
} from '../../../components/Arrays/arraysProducts'
import CartItemProd from './CartItemProd'
import { useAppSelector } from 'redux/hooks'
import CartTotal from './CartTotal'

type productObjectProps = { [key: number]: ArrProductsProps }
type Props = {}

const Cart = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.cartProductsState)
    const totalCount = useAppSelector((state) => state.cartProductsState)
    const arrProducts = useAppSelector((state) => state.shopList)
    const productObject: productObjectProps = getProductObject(arrProducts)

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
