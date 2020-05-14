const initialState = {tasksCompleted: []};

const toggleTask = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case 'TOGGLE_TASK':
            const taskCompletedIndex =
                state.tasksCompleted.findIndex(item => item.id === action.value.id);
            if (taskCompletedIndex !== -1) {
                nextState = {
                    ...state,
                    tasksCompleted: state.tasksCompleted.filter((item, index) => index !== taskCompletedIndex),
                };
            }
            else {
                nextState = {
                    ...state,
                    tasksCompleted: [...state.tasksCompleted, action.value],
                };
            }
            return nextState || state;
        default:
            return state;
    }
};

export default toggleTask;
