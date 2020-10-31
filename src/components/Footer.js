import React, { Component } from 'react';

class Footer extends Component {


    constructor(props) {
        super(props)

        this.state = {
            x: []
        }

    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Hello</span>
                </footer>
            </div>
        );
    }
}

export default Footer;