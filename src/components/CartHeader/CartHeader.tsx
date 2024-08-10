import { getProductObject, Product, productsArrey } from 'utils/productsArrey'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    ProductsInCart,
    productsObject = getProductObject(productsArrey),
}: Props) => {
    return (
        <div>
            <div>
                {Object.keys(ProductsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[+productId].title}:{' '}
                        {ProductsInCart[+productId]}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CartHeader
