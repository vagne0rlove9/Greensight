import React, { Component } from 'react';
import './Layout.css'

export class Layout extends Component {
    render() {
        return (
            <div className="main-container">
                {this.props.children}
            </div>
        );
    }
}
