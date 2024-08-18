import { getProductsObject, Product, productsArray } from 'utils/productsArray'
import { Container } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'

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
            <CartTotal productsInCart={productsInCart} />
        </Container>
    )
}
export default CartPage
