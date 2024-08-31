import { createSlice } from '@reduxjs/toolkit'
type ProductsInCart = {
    [id: number]: number
}
const initialState: ProductsInCart = {
    1: 3,
    2: 3,
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (prevState, action) => ({
            ...prevState,
            [action.payload.id]:
                (prevState[action.payload.id] || 0) + action.payload.count,
        }),
    },
})
export const { addProductToCart } = cartSlice.actions
export default cartSlice.reducer
