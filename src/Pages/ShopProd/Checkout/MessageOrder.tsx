import React from 'react'

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
}

const MessageOrder = ({ orderData, setFormState }: Props) => {
    return (
        <div className="massage-order">
            <div className="massage-content">
                <h3 className="content-title">
                    Thanks for your order, {orderData.name}!
                </h3>
                <div className="content-text">
                    We will contact you to confirm your order
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
