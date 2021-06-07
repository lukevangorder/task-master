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

function increment(){
  return {
    type: 'INCREMENT',
}
}

const mapStateToProps = (state) => {
  return { test: state.test };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard); 
