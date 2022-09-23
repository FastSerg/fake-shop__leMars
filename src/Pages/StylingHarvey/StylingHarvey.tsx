import React from 'react'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import StylingMainContent from './StylingMainContent'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const StylingHarvey = ({ active, changeState }: Props) => {
    return (
        <>
            <div className="container-pages">
                <div className="container">
                    <StylingMainContent />
                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StylingHarvey
