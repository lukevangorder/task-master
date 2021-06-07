import { createStore } from 'redux';

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            state.tasks.push(action.newTask)
            return {
                ...state,
            }
            break
        default:
          return state
    }
}