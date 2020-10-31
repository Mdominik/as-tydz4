import React, { Component } from 'react';

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            x: []
        }

    }

    render() {
        return (
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item p-4">
                    <a className="nav-link active" href="/cars">All cars</a>
                </li>
                <li className="nav-item p-4">
                    <a className="nav-link active" href="/add-car">Add a car</a>
                </li>
            </ul>
        );
    }
}

export default Menu;