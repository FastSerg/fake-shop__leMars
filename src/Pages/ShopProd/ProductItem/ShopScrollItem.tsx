import { Grid } from '@mui/material'

const arrCategoryProd = [
    {
        name: 'Accessories',
        id: 1,
    },
    {
        name: 'Clothing',
        id: 2,
    },
    {
        name: 'Decor',
        id: 3,
    },
    {
        name: 'Shoes',
        id: 4,
    },
    {
        name: 'Tableware',
        id: 5,
    },
    {
        name: 'Uncategorized',
        id: 6,
    },
]

type arrCategoryProdProps = {
    id: number
    name: string
}
type Props = {}

const ShopScrollItem = (props: Props) => {
    return (
        <Grid
            container
            sx={{
                padding: '0 10px',
                position: 'sticky',
                top: '20px',
            }}
        >
            <Grid
                item
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h5 className="scroll-title">PRODUCT CATEGORIES</h5>
            </Grid>
            {arrCategoryProd.map(({ id, name }: arrCategoryProdProps) => (
                <Grid
                    key={id}
                    item
                    md={12}
                    sx={{
                        display: 'flex',
                        paddingLeft: '10px',
                        alignItems: 'center',
                        borderBottom: '0.5px solid  rgba(153, 155, 157,0.3)',
                    }}
                >
                    <p className="scroll-category__item">{name}</p>
                </Grid>
            ))}
            <Grid item md={12}>
                <Grid container>
                    <Grid
                        item
                        md={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '60px',
                        }}
                    >
                        <h5 className="scroll-title">PRODUCTS</h5>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container>
                            <Grid item md={4}>
                                <img
                                    src="/img/productList/capCamouflage.jpg"
                                    alt="capCamouflage"
                                />
                            </Grid>
                            <Grid item md={8}>
                                <div className="scroll-products">
                                    Cap Camouflage
                                </div>
                                <div className="scroll-products__price">
                                    £60.00
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <img
                                    src="/img/productList/womensSandals.jpg"
                                    alt="womensSandals"
                                />
                            </Grid>
                            <Grid item md={8}>
                                <div className="scroll-products">
                                    Women's Sandals
                                </div>
                                <div className="scroll-products__price">
                                    £250.00
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <img
                                    src="/img/productList/PurseMans.jpg"
                                    alt="PurseMans"
                                />
                            </Grid>
                            <Grid item md={8}>
                                <div className="scroll-products">
                                    Purse Man's Black
                                </div>
                                <div className="scroll-products__price">
                                    £70.00
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ShopScrollItem
