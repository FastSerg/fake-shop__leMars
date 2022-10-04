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
    setFormState: (formState: boolean) => void
    productObject?: { [id: number]: ArrProductsProps }
}

const MessageOrder = ({
    orderData,
    setFormState,
    productObject = getProductObject(arrProducts),
}: Props) => {
    const productsInCart = useAppSelector((state) => state.cartProductsState)

    return (
        <div className="massage-order">
            <div className="massage-content">
                <h3 className="content-title">
                    Thanks for your order, {orderData.name}!
                </h3>
                <div className="content-text">
                    <p> We will contact you to confirm your order</p>
                    {Object.keys(productsInCart).map((productId) => (
                        <Fragment key={parseInt(productId)}>
                            <div className="product-item">
                                <span>
                                    {
                                        productObject[parseInt(productId)]
                                            .nameProduct
                                    }{' '}
                                    -
                                </span>

                                <span className="price-subtotal">
                                    {productsInCart[parseInt(productId)]}
                                </span>
                            </div>
                        </Fragment>
                    ))}
                </div>
                <button
                    onClick={() => setFormState(false)}
                    className="btn-order-data"
                >
                    Return
                </button>
            </div>
        </div>
    )
}

export default MessageOrder
