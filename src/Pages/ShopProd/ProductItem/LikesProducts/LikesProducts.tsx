import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import React, { Fragment } from 'react'
import { useAppSelector } from 'redux/hooks'
import ShopBg from '../ShopBg'
import {
    arrProducts,
    ArrProductsProps,
    getProductObject,
} from '../../../../components/Arrays/arraysProducts'
import ShopListContent from '../ShopListContent'

type Props = {
    productObject?: { [id: number]: ArrProductsProps }
}

const LikesProducts = ({
    productObject = getProductObject(arrProducts),
}: Props) => {
    const likesProductsShow = useAppSelector((state) => state.buttonsState)
    console.log(likesProductsShow)
    return (
        <>
            <ShopBg />

            {/* <div className="container-pages"> */}
            <div className="container">
                {likesProductsShow ? (
                    <div className="">
                        {Object.keys(likesProductsShow).map((productId) => (
                            <Fragment key={parseInt(productId)}>
                                {likesProductsShow[parseInt(productId)] ===
                                true ? (
                                    <ShopListContent
                                        id={parseInt(productId)}
                                        img={
                                            productObject[parseInt(productId)]
                                                .img
                                        }
                                        alt={
                                            productObject[parseInt(productId)]
                                                .alt
                                        }
                                        price={
                                            productObject[parseInt(productId)]
                                                .price
                                        }
                                        discount={
                                            productObject[parseInt(productId)]
                                                .discount
                                        }
                                        nameProduct={
                                            productObject[parseInt(productId)]
                                                .nameProduct
                                        }
                                    />
                                ) : undefined}
                            </Fragment>
                        ))}
                    </div>
                ) : (
                    <div style={{ fontSize: '48px', textAlign: 'center' }}>
                        There are no likes-products on this page
                    </div>
                )}
            </div>
            {/* </div> */}
            <div className="container bottom">
                <GridContainerBottom />
            </div>
        </>
    )
}

export default LikesProducts
