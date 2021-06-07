import { createStore } from 'redux';

export default function taskReducer(state = {test: 2}, action) {
    switch (action.type) {
        case 'HIGHLIGHT':
            state.tiles[`${action.row}${action.col}`].highlighted = true
        default:
          return state
    }
}