import { getProductsObject, Product, productsArray } from 'utils/productsArray'
import { Container } from '@mui/material'

type Props = {
    productsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <Container>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[+productId].title}:{' '}
                        {productsInCart[+productId]} : price for one item -{' '}
                        {productsInCart[+productId]}
                    </div>
                ))}
            </div>
            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[+productId] *
                            productsObject[+productId].price,
                    0
                )}
                $
            </div>
        </Container>
    )
}
export default CartPage
