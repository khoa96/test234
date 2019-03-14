import React, { Component } from 'react'
import CheckBox from '../../Checkbox/CheckBox';
import './style.css';
import sizes from '../../../sizes';
import {connect} from 'react-redux';
import filterReducer from '../../../reducer/filterReducer';
import productReducer from '../../../reducer/productReducer';

class Filter extends Component {
    
    render() {
        
        const list_size = sizes.map((size) => {
            return (
                <CheckBox
                    key={size.id}
                    size={size}
                />
            )
        })
        return (
            <div className="filters">
                <h4 className="title">Sizes:</h4>
                {list_size}
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        filter: state.filterReducer,
        product: state.productReducer
    }

}
export default connect(mapStateToProps)(Filter)