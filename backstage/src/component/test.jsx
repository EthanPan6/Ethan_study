import React from 'react'

export default class Editinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textAreaValue: '',
            curIndex: -1,
            arr: [{
                name: 'flash',
            },
            {
                name: 'fadeIn',
            }]
        }

    }
    change1(index) {
        this.setState({
            curIndex: index
        })
    }
    change2() {
        this.setState({
            curIndex: -1
        })
    }
    data = () => {
        return this.state.arr.map((item, index) => {
            return (<h2 className={index === this.state.curIndex ? `animated ${item.name}` : ''} key={index}
                onMouseOver={this.change1.bind(this, index)}
                onMouseOut={this.change2.bind(this)}
            >{item.name}</h2>)
        })
    }
    render() {
        return (
            <div>
                <div>{this.data()}</div>
            </div>
        )

    }
}





