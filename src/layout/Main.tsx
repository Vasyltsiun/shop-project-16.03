import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number, price: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container className="main-container" component={'main'}>
                <ProductList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}
export default Main
