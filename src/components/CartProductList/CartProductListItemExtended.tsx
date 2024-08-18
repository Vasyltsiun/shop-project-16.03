import { Card, CardContent } from '@mui/material'
import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productsCount: number
}
const CartProductListItemExtended = ({ product, productsCount }: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div>
                    <img src={product.image} alt="" />
                </div>
                <div>{product.title}</div>
                <p>Price for one item:{product.price}</p>
                <div>Count: {productsCount}</div>
            </CardContent>
        </Card>
    )
}
export default CartProductListItemExtended
