import React, { Component } from 'react'
import './style.css';
export default class Carts extends Component {
    render() {
        return (
            <div>
                
                    {/* If cart open, show close (x) button */}
                {/* {this.state.isOpen && (
                        <div
                            onClick={() => this.closeFloatCart()}
                            className="float-cart__close-btn"
                        >
                            X
          </div>
                    } */}

                {/* If cart is closed, show bag with quantity of product and open cart action */}

                <span
                    className="bag bag--float-cart-closed"
                >
                    <span className="bag__quantity">cartTotal.productQuantity</span>
                </span>
                <div className="float-cart__content">
                    <div className="float-cart__header">
                        <span className="bag">
                            <span className="bag__quantity">cartTotal.productQuantity</span>
                        </span>
                        <span className="header-title">Cart</span>
                    </div>

                    <div className="float-cart__shelf-container">
                        {/* thong tin ben trong card */}
                    </div>

                    <div className="float-cart__footer">
                        <div className="sub">SUBTOTAL</div>
                        <div className="sub-price">
                            <p className="sub-price__val">
                                total price
                                </p>
                            <small className="sub-price__installment">
                                {/* {!!cartTotal.installments && (
                                        <span>
                                            {`OR UP TO ${cartTotal.installments} x ${
                                                cartTotal.currencyFormat
                                                } ${formatPrice(
                                                    cartTotal.totalPrice / cartTotal.installments,
                                                    cartTotal.currencyId
                                                )}`}
                                        </span>
                                    )} */}
                            </small>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
