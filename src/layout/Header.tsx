import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }
}

const Header = ({ ProductsInCart }: Props) => {
    return (
        <>
            {' '}
            <AppBar position="static" sx={{ backgroundColor: 'green' }}>
                <Container>
                    <Toolbar>
                        <Logo />
                        <Menu />
                        <CartHeader ProductsInCart={ProductsInCart} />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
