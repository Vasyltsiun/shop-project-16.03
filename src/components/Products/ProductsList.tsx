import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

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
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 15"
                        description="This is iPhone 15"
                        capacity="capacity: 512Gb"
                        price="$ 1200"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 14"
                        description="This is iPhone 14"
                        capacity="capacity: 128Gb"
                        price="$ 1000"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 13"
                        description="This is iPhone 13"
                        capacity="capacity: 64Gb"
                        price="$ 800"
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
