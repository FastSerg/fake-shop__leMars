import React, { Fragment } from 'react'
import { useAppSelector } from 'redux/hooks'
import ShopBg from '../ShopBg'
import {
    ArrProductsProps,
    getProductObject,
} from '../../../../components/Arrays/arraysProducts'
import ShopListContent from '../ShopListContent'
type productObjectProps = { [key: number]: ArrProductsProps }

type Props = {}

const LikesProducts = (props: Props) => {
    const likesProductsShow = useAppSelector((state) => state.buttonsState)
    const shopProd = useAppSelector((state) => state.shopList)
    const productObject: productObjectProps = getProductObject(shopProd)

    return (
        <>
            <ShopBg />
            <div className="container">
                {Object.keys(likesProductsShow).length !== 0 ? (
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
                                ) : null}
                            </Fragment>
                        ))}
                    </div>
                ) : (
                    <div style={{ fontSize: '48px', textAlign: 'center' }}>
                        There are no likes-products on this page
                    </div>
                )}
            </div>
        </>
    )
}

export default LikesProducts
