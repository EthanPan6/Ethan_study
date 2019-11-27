import React, { Component } from 'react'
import { Home, Footer, Main } from './components'


export default class App extends Component {
    render() {
        return (
            <>
                <Home name="HOME" />
                <Main title="Main" />
                <Footer >Footer</Footer>
            </>
        )
    }
}
