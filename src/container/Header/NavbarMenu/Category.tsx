import React, { useState } from 'react'
import { Grid } from '@mui/material'
import ItemHeaderMenu from './ItemHeaderMenu'

const categoryList = [
    { name: 'All', id: 1 },
    { name: 'BEAUTY', id: 2 },
    { name: 'FASHION', id: 3 },
    { name: 'LIFESTYLE', id: 4 },
    { name: 'TRAVEL', id: 5 },
]
type CategoryProps = { name: string; id: number }
type PropsAll = {
    isActive: boolean
    nameCategory: string
}

type Props = {}

const Category = (props: Props) => {
    const [active, setActive] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)

    return (
        <li
            className="category"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="menu-item">CATEGORY</div>
            <div className={active ? 'lage-menu active' : 'lage-menu'}>
                <ul className="category-position">
                    {categoryList.map(({ id, name }: CategoryProps) => (
                        <li
                            className="sub-menu__item"
                            key={id}
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
                <div className="lage-menu__position">
                    <div
                        className="lage-menu__item "
                        style={show ? { opacity: 1 } : { opacity: 0 }}
                    >
                        <Grid
                            container
                            spacing={1}
                            sx={{ textAlign: 'center' }}
                        >
                            <Grid item md={4}>
                                <ItemHeaderMenu
                                    img={'/img/wooman_legs.jpg'}
                                    alt="man_with_bag"
                                    nameCategory={'FASHION'}
                                    title={'Ready for the Summer'}
                                />
                            </Grid>
                            <Grid item md={4} sx={{ height: '100%' }}>
                                <ItemHeaderMenu
                                    img={'/img/sity_palm.jpg'}
                                    alt={'sity_palm'}
                                    nameCategory={'LIFESTYLE'}
                                    title={'Sonoma Valley Lancome'}
                                />
                            </Grid>
                            <Grid item md={4}>
                                <ItemHeaderMenu
                                    img={'/img/man_see.jpg'}
                                    alt={'man_see'}
                                    nameCategory={'BEAUTY'}
                                    title={'New Year Creativity'}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Category
