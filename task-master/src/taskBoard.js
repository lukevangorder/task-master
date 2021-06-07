import React, { Component } from 'react';

export default class TaskBoard extends Component {

    constructor(props){
        super()
    }

    render() {
        console.log(this.props)
        return (
            <div onClick={() => {this.props.increment()}}> {this.props.test}</div>
        )
    }
}