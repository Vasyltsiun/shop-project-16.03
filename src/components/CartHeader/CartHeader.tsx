import { getProductsObject, Product, productsArrey } from 'utils/productsArrey'

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
    productsObject = getProductsObject(productsArrey),
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
            <div>
                Total:{' '}
                {Object.keys(ProductsInCart).reduce(
                    (total, productId) =>
                        total +
                        ProductsInCart[+productId] *
                            productsObject[+productId].price,
                    0
                )}
                $
            </div>
        </div>
    )
}
export default CartHeader
