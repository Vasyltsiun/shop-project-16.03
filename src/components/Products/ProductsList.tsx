import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArrey } from 'utils/productsArrey'

console.log(productsArrey)

type Props = {}

const ProductsList = (props: Props) => {
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
                {productsArrey.map((product, i) => (
                    <Grid item xs={12} sm={6} lg={4} key={i}>
                        <ProductListItem
                            title={product.title}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductsList
