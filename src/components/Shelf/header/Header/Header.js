import React, { Component } from 'react'
import SelectBox from '../../../Selectbox/SelectBox';

export default class Header extends Component {
    render() {
        return (
            <div className="shelf-container-header">
                <small className="products-found">
                    <span>100 Product(s) found.</span>
                </small>
                <SelectBox/>
            </div>
        )
    }
}
