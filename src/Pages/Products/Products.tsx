import ButtonFixed from 'components/ButtonFixed/ButtonFixed'
import HeaderTop from 'components/HeaderTopComponent/HeaderTop'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import ModalWindow from 'Pages/Subscribe/ModalWindow'
import Subscribe from 'Pages/Subscribe/Subscribe'
import React, { useState } from 'react'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const Products = ({ active, changeState }: Props) => {
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
                    <Subscribe active={modalActive} setActive={setModalActive}>
                        <ModalWindow />
                    </Subscribe>
                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
            <ButtonFixed />
        </>
    )
}
export default Products
