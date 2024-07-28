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
    color: string
    isDescription: boolean
}

class ProductListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
        isDescription: false,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

    toggleDescription = () => {
        this.setState((prevState) => ({
            isDescription: prevState.isDescription ? false : true,
        }))
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
                    <div>
                        <div>
                            Color:{' '}
                            <span className={`${this.state.color}`}>
                                {this.state.color}
                            </span>
                        </div>
                        <button onClick={this.changeColor}>Change color</button>
                    </div>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity}
                    </div>
                    <button onClick={}>Toogle description</button>
                    {this.state.isDescription ? (
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Adipisci illum, iusto similique veritatis,
                            recusandae porro numquam delectus aliquid
                            perferendis eius et, sed id officiis sapiente
                            laudantium aperiam itaque doloribus eum?
                        </p>
                    ) : null}

                    <div className="product-price">$ {this.props.price}</div>

                    <div className="product-quantity"></div>
                    <Button
                        variant="outlined"
                        onClick={this.onDecrementClick}
                        disabled={this.state.count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={this.state.count} />
                    <Button variant="outlined" onClick={this.onIncrementClick}>
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
