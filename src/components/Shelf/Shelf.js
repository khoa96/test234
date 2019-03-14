import React, { Component } from 'react'
import './style.css';
import Spinner from '../Spinner/Spinner';
import Header from './header/Header/Header';
import ProductList from './productlist/ProductList';
import {connect} from 'react-redux';

class Shelf extends Component {
    render() {
        let { isFreeShipping } = this.props.filter;
        return (
            <React.Fragment>
               {}
                <div className="shelf-container">
                   <Header/>
                   <ProductList/>
                </div>
            </React.Fragment>
        )
    }
}
function mapStateToProps (state) {
    return {
        filter: state.filterReducer,
        product: state.productReducer
    }

}
export default connect(mapStateToProps)(Shelf)
