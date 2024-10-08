import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './Footer'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import ProductPage from 'pages/Products/ProductsPage'
import PaymentPage from 'pages/Payment/PaymentPage'
import { omit } from 'lodash'

type productsInCartType = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<productsInCartType>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }

    const changeProductQuantity = (id: number, quantity: number) =>
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: quantity,
        }))

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductToCart={addProductToCart} />}
                />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    }
                />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="products" element={<ProductPage />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
