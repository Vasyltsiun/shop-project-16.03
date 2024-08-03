import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}
const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [isDescriptionShow, setDescriptionShow] = useState<boolean>(false)

    const toggleDescription = () => {
        setIsDescriptionShow((prevState) => !prevState)
    }

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

                <div>
                    <button onClick={toggleDescription}>
                        {isDescriptionShow ? 'Hide' : 'Show'}
                        description
                    </button>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum ipsum eos optio ullam eligendi mollitia. Ut
                        minima nisi ipsam molestiae nam, asperiores repellendus
                        laborum quos placeat voluptate veritatis quo animi!
                    </p>
                </div>

                <div className="product-features">Capacity: {capacity}</div>
                <div className="product-price">$ {price}</div>

                <div className="product-quantity"></div>

                <Button variant="outlined" onClick={onDecrementClick}>
                    -
                </Button>
                <TextField size="small" value={count} />
                <Button variant="outlined" onClick={onIncrementClick}>
                    +{' '}
                </Button>

                <div className="btns-wrapper">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
