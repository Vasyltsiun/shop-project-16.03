import {
    Button,
    Card,
    CardContent,
    tablePaginationClasses,
} from '@mui/material'
import './ProductListItem.css'

type Props = {
    title: string
    description: string
    capacity: string
    price: string
}
const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <h3 className="product-title">{props.title}</h3>
                <p className="product-description">{props.description}</p>
                <div className="product-features">Type: phone</div>
                <div className="product-features">{props.capacity}</div>
                <div className="product-price">{props.price}</div>
                <div className="btns-wrapper">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
