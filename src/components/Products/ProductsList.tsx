import { Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <div>
            <Typography variant="h4" component={'h1'}>
                <ProductListItem />
            </Typography>
        </div>
    )
}
export default ProductsList
