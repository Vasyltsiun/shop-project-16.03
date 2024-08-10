import { productsArrey } from 'utils/productsArrey'

type ProductArrey = {
    title: string
}

type Props = {
    ProductsInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ ProductsInCart }: Props) => {
    return (
        <div>
            <div>
                {Object.keys(ProductsInCart).map((productId, ProductArrey) => (
                    <div key={productId}>
                        {productsArrey[+productId - 1].title}:{' '}
                        {ProductsInCart[+productId]}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CartHeader
