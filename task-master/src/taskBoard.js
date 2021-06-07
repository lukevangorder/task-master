import React, { Component } from 'react';

export default class TaskBoard extends Component {

    constructor(props){
        super()
        this.state = {
            childTasks: []
        }
    }

    render() {
        return (
            <div class='taskBoard'>
                <h3 style={{float: 'right'}} onClick >+</h3>
            </div>
        )
    }
}