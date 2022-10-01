import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import React, { useState } from 'react'
import './Checkout.scss'
import CheckoutForm from './CheckoutForm'
import MessageOrder from './MessageOrder'
import axios from 'axios'

type Props = {}
type OrderData = {
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
const Checkout = (props: Props) => {
    const [formState, setFormState] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<OrderData>({
        name: '',
        lastName: '',
        company: '',
        StreetAddress: '',
        ApartmentAddress: '',
        city: '',
        county: '',
        postcode: '',
        phone: '+380',
        emeil: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            lastName: e.target.value,
        }))
    }

    const handleCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            company: e.target.value,
        }))
    }

    const handleStreetAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            StreetAddress: e.target.value,
        }))
    }

    const handleApartmentAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            ApartmentAddress: e.target.value,
        }))
    }

    const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            city: e.target.value,
        }))
    }

    const handleCounty = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            county: e.target.value,
        }))
    }

    const handlePostcode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            postcode: e.target.value,
        }))
    }

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            phone: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            emeil: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                { name: orderData.name, lastName: orderData.lastName }
            )
            .then((res) => res.data)
            .then(({ name, lastName }) => {
                setOrderData({ name, lastName })
                setFormState(true)
            })
    }
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
                    {formState ? (
                        <MessageOrder
                            orderData={orderData}
                            setFormState={setFormState}
                        />
                    ) : (
                        <CheckoutForm
                            orderData={orderData}
                            handleName={handleName}
                            handleLastName={handleLastName}
                            handleCompany={handleCompany}
                            handleStreetAddress={handleStreetAddress}
                            handleApartmentAddress={handleApartmentAddress}
                            orderSend={orderSend}
                            handleCity={handleCity}
                            handleCounty={handleCounty}
                            handlePostcode={handlePostcode}
                            handlePhone={handlePhone}
                            handleEmail={handleEmail}
                            handleText={handleText}
                        />
                    )}

                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
