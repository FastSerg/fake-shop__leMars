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

type listProps = { [id: number]: boolean }

export const App = () => {
    const [active, setActive] = useState<listProps>({
        1: false,
        2: false,
    })

    const changeState = (id: number) => {
        setActive((prevState: listProps) => ({
            [id]: prevState[id] !== (true || false) ? true : false,
        }))
    }

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <CssBaseline />{' '}
                            <Header active={active} changeState={changeState} />{' '}
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
                            <HeaderTop
                                active={active}
                                changeState={changeState}
                            />
                            <StoryOfBeauty
                                active={active}
                                changeState={changeState}
                            />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="StylingHarvey"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop
                                active={active}
                                changeState={changeState}
                            />
                            <StylingHarvey
                                active={active}
                                changeState={changeState}
                            />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="contactUs"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop
                                active={active}
                                changeState={changeState}
                            />
                            <ContactUs
                                active={active}
                                changeState={changeState}
                            />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="cultural"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop
                                active={active}
                                changeState={changeState}
                            />
                            <EverythingCultural
                                active={active}
                                changeState={changeState}
                            />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="products"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop
                                active={active}
                                changeState={changeState}
                            />
                            <Products
                                active={active}
                                changeState={changeState}
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
                            <HeaderTop
                                active={active}
                                changeState={changeState}
                            />
                            <Cart active={active} changeState={changeState} />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
