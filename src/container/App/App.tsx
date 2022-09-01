import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import SimpleListMenu from 'container/Footer/Test'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <SimpleListMenu />
            <Footer />
        </>
    )
}

export default App
