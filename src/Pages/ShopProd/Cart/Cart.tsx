import React from 'react'
import './Cart.scss'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const Cart = ({ active, changeState }: Props) => {
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
                        <span></span>
                        <div className="cart-title">Product</div>
                        <div className="cart-title">Price</div>
                        <div className="cart-title">Quantity</div>
                        <div className="cart-title">Total</div>
                        <span></span>
                    </div>
                    <div className="cart-container">
                        <div className="cart-image">
                            <img
                                src="/img/productList/capCamouflage.jpg"
                                alt="capCamouflage"
                            />
                        </div>
                        <div className="scroll-products">Cap Camouflage</div>
                        <div className="price">£60.00</div>
                        <div className="quantity">1</div>
                        <div className="">4444</div>
                        <div className="">
                            <DeleteForeverOutlinedIcon
                                sx={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
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
