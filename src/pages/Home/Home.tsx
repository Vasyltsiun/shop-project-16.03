import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number, price: number) => void
    toggleLikeState: (id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}
const Home = ({
    addProductToCart,
    productsLikeState,
    toggleLikeState,
}: Props) => {
    return (
        <>
            <Container className="main-container" component={'main'}>
                <ProductList
                    addProductToCart={addProductToCart}
                    productsLikeState={productsLikeState}
                    toggleLikeState={toggleLikeState}
                />
                <Reviews />
            </Container>
        </>
    )
}
export default Home
