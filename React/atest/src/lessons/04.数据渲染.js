import React, { Component } from 'react'

export default class dataMap extends Component {
    constructor() {
        super()
        this.state = {
            list: [1, 2, 3, 4, 5, 64, 8, 48, 45, 1, 1, 1, 51, 5]
        }
    }


    render() {
        return (
            <div>
<ul>
    {
        this.state.list.map
    }
</ul>
            </div>
        )
    }
}
