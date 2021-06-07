import { createStore } from 'redux';

export default function taskReducer(state = {test: 1}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { test: state.test + 1 }
            break
        default:
          return state
    }
}