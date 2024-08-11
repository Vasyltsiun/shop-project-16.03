import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './Footer'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from 'pages/Home/Home'

type productsInCartType = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<productsInCartType>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
            /*const newState = { ...prevState }
            const productQty = newState[id] || 0
            newState[id] = productQty + count
            return newState*/
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductToCart={addProductToCart} />}
                />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
