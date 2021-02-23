import React, { Component } from 'react'

export default class DummyClassComp extends Component {

    componentDidMount() {
        console.log('componentDidMount',new Date().toTimeString());
    }
    render() {
        console.log('render',new Date().toTimeString());

        return (
            <div>
                <h1>this is a sample container</h1>
            </div>
        )
    }
}
