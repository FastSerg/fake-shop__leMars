import React, { useState } from 'react'
import './Checkout.scss'
import CheckoutForm from './CheckoutForm'
import MessageOrder from './MessageOrder'
import axios from 'axios'

type Props = {}
type OrderData = {
    name: string
    lastName: string
    company: string
    StreetAddress: string
    ApartmentAddress: string
    city: string
    county: string
    postcode: string
    phone: string
    email: any
    text?: string
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
        email: '',
        text: '',
    })

    const [error, setError] = useState<OrderData>({
        name: '',
        lastName: '',
        company: '',
        StreetAddress: '',
        ApartmentAddress: '',
        city: '',
        county: '',
        postcode: '',
        phone: '+380',
        email: '',
        text: '',
    })

    const isValidName = (name: string) => {
        return /(?=.*[a-z])[a-z]{2,}/g.test(name)
    }

    const isValidEmail = (email: string) => {
        return /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)
    }

    const isValidpassword = (password: string) => {
        return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,10}$/g.test(
            password
        )
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        !isValidName(e.target.value)
            ? setError((prevState: OrderData) => ({
                  ...prevState,
                  name: 'Name is to short',
              }))
            : setError((prevState: OrderData) => ({ ...prevState, name: '' }))
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        !isValidName(e.target.value)
            ? setError((prevState: OrderData) => ({
                  ...prevState,
                  lastName: 'lastName is to short',
              }))
            : setError((prevState: OrderData) => ({
                  ...prevState,
                  lastName: '',
              }))
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
        !isValidpassword(e.target.value)
            ? setError((prevState: OrderData) => ({
                  ...prevState,
                  postcode: 'postcode is must have one big letter and number',
              }))
            : setError((prevState: OrderData) => ({
                  ...prevState,
                  postcode: '',
              }))
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
        !isValidEmail(e.target.value)
            ? setError((prevState: OrderData) => ({
                  ...prevState,
                  email: 'Email is invalid',
              }))
            : setError((prevState: OrderData) => ({ ...prevState, email: '' }))
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            email: e.target.value,
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
            .then(
                ({
                    name,
                    lastName,
                    company,
                    StreetAddress,
                    ApartmentAddress,
                    city,
                    county,
                    postcode,
                    phone,
                    email,
                    text,
                }) => {
                    setOrderData({
                        name,
                        lastName,
                        company,
                        StreetAddress,
                        ApartmentAddress,
                        city,
                        county,
                        postcode,
                        phone,
                        email,
                        text,
                    })
                    setFormState(true)
                }
            )
    }
    return (
        <div>
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
                            error={error}
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
                </div>
            </div>
        </div>
    )
}

export default Checkout
