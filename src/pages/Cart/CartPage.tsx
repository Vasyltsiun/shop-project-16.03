import { Container, Grid, Typography } from '@mui/material'
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
            <Typography variant="h1" component={'h1'} sx={{ margin: '40px 0' }}>
                Cart
            </Typography>
            <Grid container spacing={4} sx={{ margin: '30px 0' }}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </Container>
    )
}
export default CartPage
