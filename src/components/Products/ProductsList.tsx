import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

console.log(productsArray)

type Props = {
    addProductToCart: (id: number, count: number, price: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}

const ProductsList = ({ addProductToCart, productsLikeState }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    marginBottom: '30px',
                }}
            >
                {' '}
                Products list
            </Typography>
            <Grid container spacing={2}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                id={id}
                                addProductToCart={addProductToCart}
                                isLiked={productsLikeState[id]}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
