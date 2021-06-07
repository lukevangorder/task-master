import { createStore } from 'redux';

const initialState = {
    test: 2
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { test: state.test + 1 }
            break
        default:
          return state
    }
}