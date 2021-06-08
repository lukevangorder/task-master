import React, { Component } from 'react';

export default class NewTask extends Component {

    constructor(props){
        super()
    }

    render() {
        return (
            <li>{this.state.text}</li>
        )
    }
}