import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { Component } from 'react'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
}

class ProductListItem extends Component<Props, State> {
    state = {
        count: 1,
    }

    onIncrementClick() {
        this.setState({
            count: 10,
        })
    }

    render() {
        return (
            <Card variant="outlined" className="product-list-item">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <h3 className="product-title">{this.props.title}</h3>
                    <p className="product-description">
                        {this.props.description}
                    </p>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity}
                    </div>
                    <div className="product-price">$ {this.props.price}</div>

                    <div className="product-quantity"></div>
                    <Button variant="outlined">-</Button>
                    <TextField size="small" value={this.state.count} />
                    <Button
                        variant="outlined"
                        onClick={this.onIncrementClick.bind(this)}
                    >
                        +{' '}
                    </Button>

                    <div className="btns-wrapper">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default ProductListItem
