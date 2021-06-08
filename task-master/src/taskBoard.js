import React, { Component } from 'react';
import Task from './task.js';

export default class TaskBoard extends Component {

    constructor(props){
        super()
    }
 
    handleClick = (task) => {
        console.log('test')
        this.props.addTask(task)
    }

    render() {
        const taskLis = [];
        for(let i=0; i<this.props.tasks.length; i++){
            taskLis.push(<Task key={i} text={this.props.tasks[i]}/>)
        }
        return (
            <div class='taskBoard'>
                <h6 onClick={() => this.handleClick('New Task')} >+</h6>
                <ul>{taskLis}</ul>
            </div>
        )
    }
}