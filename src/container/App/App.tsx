import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import StoryOfBeauty from 'Pages/StoryOfBeauty'

export const App = () => {
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
                            {' '}
                            <Header />
                            <StoryOfBeauty />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
