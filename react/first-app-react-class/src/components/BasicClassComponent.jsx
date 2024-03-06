import React, { Component } from 'react'

class BasicClassComponent extends Component {
    constructor(props) {
        super(props);

    }

    showProps() {
        console.log(this.props)
        console.log(this.event)
    }
    //     {/*showProps = () => {
    //          console.log(this.props);
    // } */}

    render() {
        return (
            <div style={{ color: this.props.textColor, backgroundColor: this.props.bg }}>
                Labas is klasinio komponento
                {
                    this.props.numberArray?.map((el, i) => (
                        <p key={i}>{el}</p>
                    ))
                }
                <button onClick={() => this.showProps}>Click</button>
            </div>
        )
    };
}
export default BasicClassComponent
