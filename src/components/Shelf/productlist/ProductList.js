import React, { Component } from 'react'
import Product from './product/Product';
import {connect} from 'react-redux';

class ProductList extends Component {
    render() {
        let { products } = this.props.product;
        return (
            <React.Fragment>
               {
                   products.map((product) => {
                       return (
                           <Product
                               key={product.id}
                               product={product}
                           />
                       )
                   })
               }
            </React.Fragment>
        )
    }
}
function mapStateToProps (state) {
    return {
        product: state.productReducer
    }
}

export default connect(mapStateToProps)(ProductList)