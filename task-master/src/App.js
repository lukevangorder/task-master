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

const mapStateToProps = (state) => {
  return { test: state.test };
};

export default connect(
  mapStateToProps
)(TaskBoard); 
