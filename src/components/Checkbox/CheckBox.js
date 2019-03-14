import React, { Component } from 'react'

export default class CheckBox extends Component {
    render() {
        let { type } = this.props.size;
        return (
            <div className="filters-available-size">
                <label>
                    <input type="checkbox" />
                    <span className="checkmark">{type}</span>
                </label>
            </div>
        )
    }
}
