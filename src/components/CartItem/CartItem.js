import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <div className="shelf-item shelf-item--mouseover">
                <div
                    className="shelf-item__del" />
                 <div className="shelf-item__thumb">
                    <img src="./products/100_1.jpg" />
                </div>
                <div className="shelf-item__details">
                    <p className="title">product.title</p>
                    <p className="desc">
                        product.availableSizes-product.style <br />
                        Quantity: product.quantity
                    </p>
                </div>
                <div className="shelf-item__price">
                    <p>r345345</p>
                </div>
            </div>
        )
    }
}
