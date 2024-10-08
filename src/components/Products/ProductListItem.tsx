import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    id: number
    addProductToCart: (id: number, count: number, price: number) => void
}
const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
    id,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const onDecrementClick = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>

                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>

                <div className="product-features">Capacity: {capacity}</div>
                <div className="product-price">$ {price}</div>

                <Quantity
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    count={count}
                />
                <div className="btns-wrapper">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count, price)}
                    >
                        Add to cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
