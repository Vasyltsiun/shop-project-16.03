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
        2: 5,
        3: 6,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            [id]: prevState[id] + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header ProductsInCart={ProductsInCart} />
            <button onClick={() => addProductToCart(2, 5)}>
                Add product to cart
            </button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
