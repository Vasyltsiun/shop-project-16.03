import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number, price: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}
const Home = ({ addProductToCart, productsLikeState }: Props) => {
    return (
        <>
            <Container className="main-container" component={'main'}>
                <ProductList
                    addProductToCart={addProductToCart}
                    productsLikeState={productsLikeState}
                />
                <Reviews />
            </Container>
        </>
    )
}
export default Home
