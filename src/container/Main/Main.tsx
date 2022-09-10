import React from 'react'
import './Main.scss'
import Banner from './Banner'
import ContainerMainCategory from './MainCatagory/MainCategoryFon'
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
