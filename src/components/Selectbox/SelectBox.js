import React, { Component } from 'react'

export default class SelectBox extends Component {
    render() {
        return (
            <div className="sort">
            Order By: 
                <select>
                    <option value="0">Select</option>
                    <option value="1">Hightet to lower</option>
                    <option value="2">lowerest to hight</option>
                </select>
            </div>
        )
    }
}
