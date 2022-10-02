import React, { Fragment } from 'react'
import { useAppSelector } from 'redux/hooks'
import {
    arrProducts,
    ArrProductsProps,
    getProductObject,
} from '../../../components/Arrays/arraysProducts'

type Props = {
    orderData: {
        name: string
        lastName: string
        company?: string
        StreetAddress?: string //
        ApartmentAddress?: string //
        city?: string //
        county?: string
        postcode?: string //
        phone?: string //
        emeil?: any //
        text?: string //
    }
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleLastName: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCompany: (e: React.ChangeEvent<HTMLInputElement>) => void
    orderSend: (e: React.FocusEvent<HTMLFormElement>) => void
    handleStreetAddress: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleApartmentAddress: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCity: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCounty: (e: React.ChangeEvent<HTMLInputElement>) => void
    handlePostcode: (e: React.ChangeEvent<HTMLInputElement>) => void
    handlePhone: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    productObject?: { [id: number]: ArrProductsProps }
}

const CheckoutForm = ({
    orderData,
    handleName,
    handleLastName,
    orderSend,
    handleCompany,
    handleStreetAddress,
    handleApartmentAddress,
    handleCity,
    handleCounty,
    handlePostcode,
    handlePhone,
    handleEmail,
    handleText,
    productObject = getProductObject(arrProducts),
}: Props) => {
    console.log(orderData.name)

    const productsInCart = useAppSelector((state) => state.cartProductsState)
    const totalCount = useAppSelector((state) => state.cartProductsState)

    return (
        <form onSubmit={orderSend}>
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
                                value={orderData.name}
                                required
                                onChange={handleName}
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
                                value={orderData.lastName}
                                required
                                onChange={handleLastName}
                            />
                        </div>
                    </div>
                    <div className="d-flex">
                        <label htmlFor="">Company Name (Optional)</label>
                        <input
                            type="text"
                            name="order-company"
                            className="order-input"
                            id="order-company"
                            value={orderData.company}
                            placeholder="Company Name"
                            onChange={handleCompany}
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
                            value={orderData.StreetAddress}
                            onChange={handleStreetAddress}
                        />
                        <input
                            type="text"
                            name="address-apartment"
                            className="order-input"
                            id="address-apartment"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            value={orderData.ApartmentAddress}
                            onChange={handleApartmentAddress}
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
                            value={orderData.city}
                            onChange={handleCity}
                        />
                    </div>
                    <div className="d-flex">
                        <label htmlFor="">County (Optional)</label>
                        <input
                            type="text"
                            name="order-county"
                            className="order-input"
                            id="order-county"
                            value={orderData.county}
                            placeholder="Company Name"
                            onChange={handleCounty}
                        />
                    </div>
                    <div className="d-flex">
                        <label htmlFor="">Postcode *</label>
                        <input
                            type="password"
                            name="order-postcode"
                            className="order-input"
                            id="order-postcode"
                            value={orderData.postcode}
                            onChange={handlePostcode}
                            placeholder="Postcode"
                        />
                    </div>
                    <div className="d-flex">
                        <label htmlFor="">Phone *</label>
                        <input
                            type="phone"
                            name="order-phone"
                            className="order-input"
                            id="order-phone"
                            value={orderData.phone}
                            onChange={handlePhone}
                            placeholder="Phone"
                        />
                    </div>
                    <div className="d-flex">
                        <label htmlFor="">Email Address *</label>
                        <input
                            type="email"
                            name="order-email"
                            className="order-input"
                            id="order-email"
                            value={orderData.emeil}
                            placeholder="Email"
                            onChange={handleEmail}
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
                            value={orderData.text}
                            rows={2}
                            cols={5}
                            onChange={handleText}
                        ></textarea>
                    </div>
                </div>
            </div>
            <h3>YOUR ORDER</h3>
            <div className="product-data">
                <div className="product-item">Product</div>
                <div className="product-item">Subtotal</div>

                {Object.keys(productsInCart).map((productId) => (
                    <Fragment key={parseInt(productId)}>
                        <div className="product-item">
                            <span>
                                {productObject[parseInt(productId)].nameProduct}{' '}
                                x
                            </span>

                            <span className="price-subtotal">
                                {productsInCart[parseInt(productId)]}
                            </span>
                        </div>
                        <div className="product-item">
                            <span className="price-subtotal">
                                £
                                {totalCount[parseInt(productId)] *
                                    productObject[parseInt(productId)].price}
                            </span>
                        </div>
                    </Fragment>
                ))}
                <div className="product-item">Subtotal</div>
                <div className="product-item">
                    <span className="checkout-subtotal">
                        {' '}
                        £{' '}
                        {Object.keys(productsInCart).reduce(
                            (total, productId) =>
                                total +
                                productObject[parseInt(productId)].price *
                                    totalCount[parseInt(productId)],
                            0
                        )}
                    </span>
                </div>
                <div className="product-item">Total</div>
                <div className="product-item">
                    <span className="checkout-total">
                        {' '}
                        £{' '}
                        {Object.keys(productsInCart).reduce(
                            (total, productId) =>
                                total +
                                productObject[parseInt(productId)].price *
                                    totalCount[parseInt(productId)],
                            0
                        )}
                    </span>
                </div>
            </div>
            <div className="personal-data">
                <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                </p>
                <button className="btn-order-data">Pleace Order</button>
            </div>
        </form>
    )
}

export default CheckoutForm
