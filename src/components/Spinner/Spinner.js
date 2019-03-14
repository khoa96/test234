import React, { Component } from 'react'
import './style.css';
export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner lds-ring">
                <div />
                <div />
                <div />
                <div />
            </div>
        )
    }
}
