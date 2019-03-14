import React, { Component } from 'react'
import CheckBox from '../../Checkbox/CheckBox';
import './style.css';
import sizes from '../../../sizes';

export default class Filter extends Component {
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
