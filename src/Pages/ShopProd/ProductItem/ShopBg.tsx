import React from 'react'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined'

type Props = {}

const ShopBg = (props: Props) => {
    return (
        <div className="shop-bg">
            <div className="overlay-shop">
                <div className="container">
                    <div className="container-title">
                        <h1>Products</h1>
                        <div className="list-inline">
                            <div className="home-link">
                                <HouseOutlinedIcon />
                                <span>HOME</span>
                            </div>
                            <span>Jacket Female Pink</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopBg
