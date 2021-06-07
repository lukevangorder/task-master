import React, { Component } from 'react';

export default class TaskBoard extends Component {

    constructor(props){
        super()
        this.state = {
            childTasks: []
        }
    }

    handleClick = () => {
        
    }

    render() {
        return (
            <div class='taskBoard'>
                <h3 style={{float: 'right'}} onClick={this.handleClick} >+</h3>
                <ul></ul>
            </div>
        )
    }
}