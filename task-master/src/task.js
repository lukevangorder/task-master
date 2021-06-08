import React, { Component } from 'react';

export default class Task extends Component {

    constructor(props){
        super()
        this.state = {
            text: props.text
        }
    }

    render() {
        return (
            <li>{this.state.text}</li>
        )
    }
}