import React, { Component } from 'react';

export default class NewTask extends Component {

    constructor(props){
        super()
    }

    render() {
        return (
            <li><form><input type='text' name='new-task'></input></form></li>
        )
    }
}