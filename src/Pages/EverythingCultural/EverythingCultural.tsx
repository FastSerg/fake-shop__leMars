import HeaderTop from 'components/HeaderTopComponent/HeaderTop'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import StylingMainContent from 'Pages/StylingHarvey/StylingMainContent'
import ModalWindow from 'Pages/Subscribe/ModalWindow'
import Subscribe from 'Pages/Subscribe/Subscribe'
import React, { useState } from 'react'
import CulturalContent from './CulturalContent'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const EverythingCultural = ({ active, changeState }: Props) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const changeBoolean = (modalActive: boolean) => {
        setModalActive(true)
    }

    return (
        <>
            <HeaderTop
                setModalActive={changeBoolean}
                active={active}
                changeState={changeState}
            />

            <div className="container-pages">
                <div className="container">
                    <CulturalContent />
                    <Subscribe active={modalActive} setActive={setModalActive}>
                        <ModalWindow />
                    </Subscribe>
                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EverythingCultural
