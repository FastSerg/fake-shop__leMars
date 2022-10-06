import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import ContactUs from 'Pages/ContactUs/ContactUs'
import Products from 'Pages/ShopProd/ProductsShop'
import Cart from 'Pages/ShopProd/Cart/Cart'
import HeaderTop from 'components/HeaderTopComponent/HeaderTop'
import Checkout from 'Pages/ShopProd/Checkout/Checkout'
import { useAppDispatch } from 'redux/hooks'
import { fetchProducts } from 'redux/productsReduser'
import { useEffect } from 'react'
import LikesProducts from 'Pages/ShopProd/ProductItem/LikesProducts/LikesProducts'
import Creativity from 'Pages/Creativity/Creativity'
import LeMarsPages from 'Pages/LeMarsPages/LeMarsPages'
import { fetchShopProducts } from 'redux/shopProducts'

export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchShopProducts())
    }, [dispatch])

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
                            <LeMarsPages
                                heightImg={'1060px'}
                                titlePage={'Story Of Beauty'}
                            />
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
                            <LeMarsPages
                                heightImg={'1271px'}
                                titlePage={'Styling Harvey'}
                            />
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
                            <LeMarsPages
                                heightImg={'1271px'}
                                titlePage={'Cobalt Leather'}
                            />
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
                            <LeMarsPages
                                heightImg={'517px'}
                                titlePage={'Dress Like a Parisian'}
                            />
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
                            <LeMarsPages
                                heightImg={'470px'}
                                titlePage={'Clarins Mascara'}
                            />
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
                            <LeMarsPages
                                heightImg={'1096px'}
                                titlePage={'Las Catalines Welcome'}
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
                            <LeMarsPages
                                heightImg={'850px'}
                                titlePage={'Everything About Cultural'}
                            />
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
                            <LeMarsPages
                                heightImg={'1271px'}
                                titlePage={'Watch Jackson Wang'}
                            />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/creativity"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Creativity />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="Shop"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Products />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="LikesProducts"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <LikesProducts />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="Cart"
                    element={
                        <>
                            <CssBaseline />
                            <HeaderTop />
                            <Cart />
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
