import React from 'react'
import { Grid } from '@mui/material/'
import { ArraysAllProps } from '../Arrays/arraysAll'
import { useState } from 'react'
import ItemHeaderMenu from 'container/Header/NavbarMenu/ElementsNavbarMenu/CategoryImgList/ItemHeaderMenu'
import './CategoryCarousel.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useAppSelector } from 'redux/hooks'

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

type settingsProps = {
    dots: boolean
    infinite: boolean
    slidesToShow: number
    slidesToScroll: number
    autoplay: boolean
    speed: number
    variableWidth: boolean
    autoplaySpeed: number
    cssEase: string
}

type CategoryListProps = { key: number; name: string }

const CategoryCarousel = () => {
    const arraysAll = useAppSelector((state) => state.products)
    const [categoryState, setCategoryState] = useState(arraysAll)

    const chooseCategory = (category: string) => {
        let categoryState = arraysAll.filter((el: ArraysAllProps) =>
            category === 'ALL' ? arraysAll : el.nameCategory === category
        )
        setCategoryState(categoryState)
    }
    const settings: settingsProps = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        variableWidth: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={2}>
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
                        spacing={1}
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            overflow: 'hidden',
                        }}
                    >
                        <Slider {...settings}>
                            {categoryState.map(
                                ({
                                    id,
                                    img,
                                    nameCategory,
                                    title,
                                    alt,
                                    namePage,
                                }: ArraysAllProps) => (
                                    <Grid item md={12} key={id}>
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
                        </Slider>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CategoryCarousel
