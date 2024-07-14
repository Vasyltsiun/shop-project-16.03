import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Container>
                <ProductList />
            </Container>
        </>
    )
}
export default Main
