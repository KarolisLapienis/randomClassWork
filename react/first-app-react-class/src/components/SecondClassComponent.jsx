import React, { Component } from 'react'

class SecondClassComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ color: this.props.textColor }}>
                yo
                <p style={{ backgroundColor: this.props.bg }}>{this.props.text}</p>
            </div>
        )
    }
}

export default SecondClassComponent
