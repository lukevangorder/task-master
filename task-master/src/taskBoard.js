import React, { Component } from 'react';
import Task from './task.js';
import NewTask from './newTask.js';

export default class TaskBoard extends Component {

    constructor(props){
        super()
    }
 
    handleClick = (task) => {
        // this.props.addTask(task)
        this.render(true)
    }

    render(newTask = false) {
        const taskLis = [];
        for(let i=0; i<this.props.tasks.length; i++){
            taskLis.push(<Task key={i} text={this.props.tasks[i]}/>)
        }
        if(newTask == true) {
            console.log('New Task')
        }
        return (
            <div class='taskBoard'>
                <h6 onClick={() => this.handleClick('New Task')} >+</h6>
                <ul>{taskLis}</ul>
            </div>
        )
    }
}