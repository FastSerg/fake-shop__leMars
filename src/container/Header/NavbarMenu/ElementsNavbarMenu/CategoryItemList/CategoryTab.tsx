import React from 'react'
import { Grid } from '@mui/material/'
import {
    arraysAll,
    ArraysAllProps,
} from '../../../../../components/Arrays/arraysAll'
import { useState } from 'react'
import ItemHeaderMenu from 'container/Header/NavbarMenu/ElementsNavbarMenu/CategoryImgList/ItemHeaderMenu'
import './Carousel.scss'

const categoryList: CategoryListProps[] = [
    {
        key: 1,
        name: 'ALL',
    },
    {
        key: 2,
        name: 'BEAUTY',
    },
    {
        key: 3,
        name: 'FASHION',
    },
    {
        key: 4,
        name: 'LIFESTYLE',
    },
    {
        key: 5,
        name: 'TRAVEL',
    },
]
type CategoryListProps = { key: number; name: string }

const CategoryTab = () => {
    const [categoryState, setCategoryState] = useState(arraysAll)

    const chooseCategory = (category: string) => {
        let categoryState = arraysAll.filter((el: ArraysAllProps) =>
            category === 'ALL' ? arraysAll : el.nameCategory === category
        )
        setCategoryState(categoryState)
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={2} sx={{}}>
                    {categoryList.map((el: CategoryListProps) => (
                        <div
                            className="gategory-list"
                            key={el.key}
                            onClick={() => chooseCategory(el.name)}
                        >
                            {el.name}
                        </div>
                    ))}
                </Grid>
                <Grid item md={10}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            overflow: 'hidden',
                        }}
                    >
                        {categoryState.map(
                            ({
                                img,
                                alt,
                                nameCategory,
                                title,
                                id,
                                namePage,
                            }: ArraysAllProps) => (
                                <Grid item md={4} key={id}>
                                    <ItemHeaderMenu
                                        img={img}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                        title={title}
                                        id={id}
                                        namePage={namePage}
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CategoryTab
