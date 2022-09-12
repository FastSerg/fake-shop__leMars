import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import StoryOfBeauty from 'Pages/StoryOfBeaty/StoryOfBeauty'
import StylingHarvey from 'Pages/StylingHarvey/StylingHarvey'

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
                            <Header active={active} changeState={changeState} />
                            <StoryOfBeauty />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="StylingHarvey"
                    element={
                        <>
                            <Header active={active} changeState={changeState} />
                            <StylingHarvey />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
