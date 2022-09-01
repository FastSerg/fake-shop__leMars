import React from 'react'
import './Main.scss'
import Banner from './Banner'
import ContainerMainCategory from './ContainerMainCategory'
import Conteiner from './Container'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Banner />
            <ContainerMainCategory />
            <Conteiner />
        </>
    )
}

export default Main
