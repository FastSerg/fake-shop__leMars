import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import React from 'react'
import ShopBg from '../ShopBg'

type Props = {}

const LikesProducts = (props: Props) => {
    return (
        <>
            <ShopBg />

            <div className="container-pages">
                <div className="container"></div>
            </div>
            <div className="container bottom">
                <GridContainerBottom />
            </div>
        </>
    )
}

export default LikesProducts
