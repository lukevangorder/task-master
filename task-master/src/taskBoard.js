import React, { Component } from 'react';

export default class TaskBoard extends Component {

    constructor(props){
        super()
    }

    render() {
        return (
            <div onClick={() => {this.props.increment(Math.random() * (10 - 1) +1)}}> 1   
            </div>
        )
    }
}