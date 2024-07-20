import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductsList'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Container
                sx={{
                    padding: '30px 0',
                }}
                className="main-container"
                component={'main'}
            >
                <ProductList />
            </Container>
        </>
    )
}
export default Main
