import React, { Component } from 'react'
import './style.css';
import Spinner from '../Spinner/Spinner';
import Header from './header/Header/Header';
import ProductList from './productlist/ProductList';

export default class Shelf extends Component {
    render() {
        return (
            <React.Fragment>
               <Spinner/>
                <div className="shelf-container">
                   <Header/>
                   <ProductList/>
                </div>
            </React.Fragment>
        )
    }
}
