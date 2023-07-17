import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
    counter: "pomodoro",
    duration: {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15
    },
    volume: 10
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_COUNTER":
            return {
                ...state,
                counter: action.payload
            };
        case "SET_DURATION":
            return {
                ...state,
                duration: {
                    ...state.duration,
                    ...action.payload
                }
            };
        case "SET_VOLUME":
            console.log(action.payload);
            return {
                ...state,
                volume: action.payload
            };
        default:
            return state;
    }
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    );
};