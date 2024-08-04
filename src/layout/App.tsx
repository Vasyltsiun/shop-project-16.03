import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from './Main'
import Footer from './Footer'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type ProductsInCartType = {
    [id: number]: number
}

const App = () => {
    const [ProductsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
        3: 5,
    })

    const addProductToCart = (count: number, price: number) => {}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header ProductsInCart={ProductsInCart} />

            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
