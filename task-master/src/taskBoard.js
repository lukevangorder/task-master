import React, { Component } from 'react';
import Task from './task.js';

export default class TaskBoard extends Component {

    constructor(props){
        super()
        this.state = {
            addClicked: false
        }
    }
 
    handleClick = () => {
        this.setState({
            addClicked: true
        })
    }

    handleNewTask = event => {
        event.preventDefault();
        const code = event.keyCode || event.which;
        if(code === 13) {
            this.props.addTask(event.target.value)
            this.setState({
                addClicked: false
            })
        } 
        
    }

    render() {
        const taskLis = [];
        for(let i=0; i<this.props.tasks.length; i++){
            taskLis.push(<Task key={i} text={this.props.tasks[i]}/>)
        }
        return (
            <div class='taskBoard'>
                <h6 onClick={() => this.handleClick()} >+</h6>
                <ul>
                    {taskLis}
                    {this.state.addClicked?
                    <li><form><input type='text' name='new-task' onKeyPress={this.handleNewTask.bind(this)}></input></form></li>
                    : <div></div>}
                </ul>
            </div>
        )
    }
}