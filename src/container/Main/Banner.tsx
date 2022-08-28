import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <>
            <div className="banner-img">
                <img src="/img/fon_img.jpg" alt="banner" />
            </div>
            <div className="header-overlay"></div>
        </>
    )
}

export default Banner
