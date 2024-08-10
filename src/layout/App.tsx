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
        2: 3,
        3: 6,
    })

    const addProductToCart = (id: number, count: number, price: number) => {
        setProductsInCart((prevState) => {
            const newState = { ...prevState }
            const productQty = newState[id] || 0
            newState[id] = productQty + count
            return newState
        })
    }

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
