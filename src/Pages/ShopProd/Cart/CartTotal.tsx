import React from 'react'
import { Link } from 'react-router-dom'

type Props = { total: number }

const CartTotal = ({ total }: Props) => {
    return (
        <div className="cart-box">
            <div className="cart-total">
                <div className="total-title">Cart Totals</div>

                <div className="subtotal">
                    <span className="cart-title">Subtotal</span>
                    <span className="price">£ {total}</span>
                </div>
                <div className="total">
                    <span className="cart-title">Total</span>
                    <span className="price">£ {total}</span>
                </div>
                <div className="btn-box">
                    <Link to="/checkout">
                        <button className="btn-total">
                            Proceed To Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
