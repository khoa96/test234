import React, { Component } from 'react'
// component san pham
export default class Product extends Component {
    render() {
        let { sku, title, description, availableSizes, price, isFreeShipping } = this.props.product;
        return (
            <div
                className="shelf-item">
                {
                    isFreeShipping ?  <div className="shelf-stopper">Free shipping</div> : ''
                }
                
                <div className="shelf-item__thumb">
                    <img src={`./products/${sku}_1.jpg`} title={title}/>
                </div>
                <p className="shelf-item__title">{ title }</p>
                <div className="shelf-item__price">
                    <div className="val">
                        <small>{ description }</small>
                        <br/>
                        <b>$ { price }</b>
                        <span></span>
                    </div>
                
                </div>
                <div className="shelf-item__buy-btn">Add to cart</div>
            </div>
        )
    }
}
