import React from 'react'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import StylingMainContent from './StylingMainContent'

type Props = {}

const StylingHarvey = () => {
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
