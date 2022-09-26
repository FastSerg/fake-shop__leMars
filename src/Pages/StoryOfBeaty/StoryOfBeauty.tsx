import React from 'react'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import StoryMainContent from './StoryMainContent'

type Props = {}

const StoryOfBeauty = () => {
    return (
        <>
            <div className="container-pages">
                <div className="container">
                    <StoryMainContent />

                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoryOfBeauty
