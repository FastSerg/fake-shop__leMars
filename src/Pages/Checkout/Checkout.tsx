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
                            <div className="user-data">
                                <h3>Billing details</h3>
                                <div className="container-name">
                                    <div className="d-flex">
                                        <label>First Name *</label>
                                        <input
                                            type="text"
                                            name="order-name"
                                            className="order-input"
                                            id="order-name"
                                            placeholder="Name"
                                            required
                                        />
                                    </div>
                                    <div className="d-flex">
                                        <label>Last Name *</label>
                                        <input
                                            type="text"
                                            name="order-last-name"
                                            className="order-input"
                                            id="order-last-name"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="">
                                        Company Name (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="order-company"
                                        className="order-input"
                                        id="order-company"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="">Street Address *</label>
                                    <input
                                        type="text"
                                        name="address-house"
                                        className="order-input"
                                        id="address-house"
                                        placeholder="House number and street name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="address-apartment"
                                        className="order-input"
                                        id="address-apartment"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        required
                                    />
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="">Town / City *</label>
                                    <input
                                        type="text"
                                        name="order-city"
                                        className="order-input"
                                        id="order-city"
                                        placeholder="Town / City"
                                        required
                                    />
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="">County (Optional)</label>
                                    <input
                                        type="text"
                                        name="order-county"
                                        className="order-input"
                                        id="order-county"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="">Postcode *</label>
                                    <input
                                        type="password"
                                        name="order-postcode"
                                        className="order-input"
                                        id="order-postcode"
                                        placeholder="Postcode"
                                        required
                                    />
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="">Phone *</label>
                                    <input
                                        type="phone"
                                        name="order-phone"
                                        className="order-input"
                                        id="order-phone"
                                        placeholder="Phone"
                                        required
                                    />
                                </div>
                                <div className="d-flex">
                                    <label htmlFor="">Email Address *</label>
                                    <input
                                        type="email"
                                        name="order-email"
                                        className="order-input"
                                        id="order-email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="order-info">
                                <h3>Additional information</h3>
                                <div className="d-flex">
                                    <label>Order Notes (Optional)</label>
                                    <textarea
                                        name="info-textarea"
                                        className="input-info"
                                        id="info-textarea"
                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                        rows={2}
                                        cols={5}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <h3>YOUR ORDER</h3>
                        <div className="product-data">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="product-col">Product</td>
                                        <td className="subtotal-col">
                                            Subtotal
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-col">
                                            Ячейка 4
                                        </td>
                                        <td className="subtotal-col">
                                            Ячейка 5
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
