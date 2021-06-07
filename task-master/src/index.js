import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers/taskReducer.js'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { connect } from 'react-redux';

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const mapStateToProps = (state) => {
  return { test: state.test };
};

export default connect(
  mapStateToProps
)(App); 
