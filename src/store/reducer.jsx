import { createStore } from "redux";

const initialState = {
    users: [],
    loggedInUser: null,
    products: [
        {
            id: 1,
            name: 'Pen',
            price: 5
        },
        {
            id: 2,
            name: 'Eriser',
            price: 10
        },
        {
            id: 3,
            name: 'Mouse',
            price: 20
        },
        {
            id: 4,
            name: 'Keyboard',
            price: 500
        },
    ],
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }

        case "LOGOUT":
            return {
                ...state,
                user: null
            }
        
        default:
            return state;
    }
}

export default createStore(reducer)