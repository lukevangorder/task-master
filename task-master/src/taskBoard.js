import React, { Component } from 'react';

export default class TaskBoard extends Component {

    constructor(props){
        super()
        this.state = {
            test: props.test
        }
    }

    render() {
        return (
            <div>{this.state.test}</div>
        )
    }
}