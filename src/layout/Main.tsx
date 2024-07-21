import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Container className="main-container" component={'main'}>
                <ProductList />
            </Container>
        </>
    )
}
export default Main
