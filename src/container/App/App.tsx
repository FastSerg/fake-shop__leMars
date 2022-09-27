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
import CobaltLeather from 'Pages/CobaltLeather/CobaltLeather'
import JacksonWang from 'Pages/JacksonWang/JacksonWang'
import Parisian from 'Pages/Parisian/Parisian'
import Marsara from 'Pages/Marsara/Marsara'
import CatalinesWelcome from 'Pages/CatalinesWelcome/CatalinesWelcome'
import Checkout from 'Pages/Checkout/Checkout'

type ProductsInCartProps = { [id: number]: number }

export const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>(
        {}
    )

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
                    path="storyOfBeauty"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <StoryOfBeauty heightImg={'1060px'} />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/harvey"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <StylingHarvey heightImg={'1271px'} />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/cobalt"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <CobaltLeather heightImg={'1271px'} />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/parisian"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Parisian heightImg={'517px'} />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/mascara"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Marsara heightImg={'470px'} />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/catalines"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <CatalinesWelcome heightImg={'1096px'} />
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
                    path="/everything"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <EverythingCultural heightImg={'850px'} />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/jackson"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <JacksonWang heightImg={'1271px'} />
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
                            <Products addCart={addCart} />
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
                <Route
                    path="checkout"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Checkout />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
