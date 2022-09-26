import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import StoryOfBeauty from 'Pages/StoryOfBeaty/StoryOfBeauty'
import StylingHarvey from 'Pages/StylingHarvey/StylingHarvey'
import ContactUs from 'Pages/ContactUs/ContactUs'
import EverythingCultural from 'Pages/EverythingCultural/EverythingCultural'
import Products from 'Pages/ShopProd/ProductsShop'
import Cart from 'Pages/ShopProd/Cart/Cart'
import HeaderTop from 'components/HeaderTopComponent/HeaderTop'

type ProductsInCartProps = { [id: number]: number }

export const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>({
        1: 1,
    })

    const addCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + 1,
        }))
    }

    console.log(productsInCart)

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <CssBaseline />
                            <Header />
                            <Main />
                            <Footer />
                        </>
                    }
                ></Route>
                <Route
                    path="storyOfBeaty"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <StoryOfBeauty />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="StylingHarvey"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <StylingHarvey />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="contactUs"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <ContactUs />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="cultural"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <EverythingCultural />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="products"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Products
                                addCart={addCart}
                                productsInCart={productsInCart}
                            />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="cart"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Cart productsInCart={productsInCart} />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
