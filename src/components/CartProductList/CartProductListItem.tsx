import { Product } from 'utils/productsArray'

type Props = {
    products: Product
    productsCount: number
}
const CartProductListItem = ({ products, productsCount }: Props) => {
    return (
        <div>
            {products.title}: {productsCount}
        </div>
    )
}
export default CartProductListItem
