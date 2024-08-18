import { getProductsObject, Product, productsArray } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[+productId]}
                    productsCount={productsInCart[+productId]}
                />
            ))}
        </div>
    )
}
export default CartProductList
