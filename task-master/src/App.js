import TaskBoard from './taskBoard.js';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <TaskBoard />
    </div>
  );
}

function addTask(task){
  return {
    type: 'ADD_TASK',
    newTask: task
}
}

const mapStateToProps = (state) => {
  return { test: state.test };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard); 
