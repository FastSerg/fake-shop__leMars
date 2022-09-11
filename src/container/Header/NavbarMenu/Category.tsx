import React, { useState } from 'react'
import { Grid } from '@mui/material'
import ItemHeaderMenu from './ItemHeaderMenu'
import {
    arrMainPageLeft,
    arrMainPageProps,
} from '../../Main/CardMainContent/arrGridContainerMain'

const categoryList = [
    { name: 'All', id: 1 },
    { name: 'BEAUTY', id: 2 },
    { name: 'FASHION', id: 3 },
    { name: 'LIFESTYLE', id: 4 },
    { name: 'TRAVEL', id: 5 },
]
type CategoryProps = { name: string; id: number }

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
    isActive?: boolean
}

const Category = ({ active, changeState, isActive = false }: Props) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <li
            className="category"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="menu-item">CATEGORY</div>
            <div className={show ? 'lage-menu active' : 'lage-menu'}>
                <ul className="category-position">
                    {categoryList.map(({ id, name }: CategoryProps) => (
                        <li
                            className="sub-menu__item"
                            key={id}
                            // isActive={active[id]}
                            onMouseEnter={() => changeState(id)}
                            onMouseLeave={() => changeState(id)}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
                <div className="lage-menu__position">
                    {arrMainPageLeft
                        .filter(
                            ({ nameCategory }: arrMainPageProps) =>
                                nameCategory === 'FASHION'
                        )
                        .map(
                            ({
                                img,
                                alt,
                                nameCategory,
                                title,
                                id,
                            }: arrMainPageProps) => (
                                <div
                                    key={id}
                                    className="lage-menu__item "
                                    style={
                                        active ? { opacity: 1 } : { opacity: 0 }
                                    }
                                >
                                    <Grid
                                        container
                                        spacing={1}
                                        sx={{ textAlign: 'center' }}
                                    >
                                        <Grid item md={4}>
                                            <ItemHeaderMenu
                                                img={img}
                                                alt={alt}
                                                nameCategory={nameCategory}
                                                title={title}
                                                id={id}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        )}
                </div>
            </div>
        </li>
    )
}

export default Category

{
    /* <Grid
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
                        </Grid> */
}
