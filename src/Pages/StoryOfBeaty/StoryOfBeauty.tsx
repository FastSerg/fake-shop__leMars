import React from 'react'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import StoryMainContent from './StoryMainContent'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const StoryOfBeauty = ({ active, changeState }: Props) => {
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
