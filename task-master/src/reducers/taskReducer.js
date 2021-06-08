const initialState = {
    tasks: ['Clean Room', 'Fold Laundry', "Finish Task Master"]
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, tasks: state.tasks.concat(action.newTask)}
        default:
          return state
    }
}