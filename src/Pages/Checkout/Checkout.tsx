import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import React from 'react'
import './Checkout.scss'
type Props = {}

const Checkout = (props: Props) => {
    return (
        <div>
            {' '}
            <div className="container-pages">
                <div className="container">
                    <div className="message-container">
                        <h5 className="message">
                            Have a coupon? Click here to enter your code
                        </h5>
                    </div>

                    <form>
                        <div className="form-order">
                            <div className="">
                                <h3>Billing details</h3>
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
                            </div>
                            <div className="order-info">
                                <h3>Additional information</h3>
                            </div>
                        </div>
                    </form>

                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
