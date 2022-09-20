import React, { useState } from 'react'

import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import HeaderTop from 'components/HeaderTopComponent/HeaderTop'
import Subscribe from 'Pages/Subscribe/Subscribe'
import ModalWindow from 'Pages/Subscribe/ModalWindow'
import StoryMainContent from './StoryMainContent'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const StoryOfBeauty = ({ active, changeState }: Props) => {
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
                    <StoryMainContent />
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

export default StoryOfBeauty
