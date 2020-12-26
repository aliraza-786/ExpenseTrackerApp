
export let initialState = {
    todos: [],
    currentBalance: 0,
    income: [],
    expense: 0
}
// export const reducer = (state, action) => {
    export function reducer ( state = initialState, action){
    switch (action.type) {
        case "add-todo":
            return {
                todos: [...state.todos, { text: action.text }],
            };
        case "add-income":
            return {
                income: [...state.income,  action.data ],
            };
        case "delete-todo":
            return {
                todos: state.todos.filter((t, id) => id !== action.id),
            };
        case "add-Balance":
            return {
                ...state,
                currentBalance : action.data,
            };
        // case "add-income":
        //     return {
        //         ...state,
        //         income : action.data,
        //     };
        case "add-expense":
            return {
                ...state,
                expense : action.data
            };
            
        default:
            return state
    }
}
