import { Container } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <Container>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
            />
            <CartTotal productsInCart={productsInCart} />
        </Container>
    )
}
export default CartPage
