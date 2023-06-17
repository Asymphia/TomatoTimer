import {createContext, useEffect, useReducer} from "react";

export const GlobalContext = createContext();

function reducer (state, action) {
    switch (action.type) {
        case 'pomodoro':
            return { counter: 'pomodoro' };
        case 'short break':
            return { counter: 'short break' };
        case 'long break':
            return { counter: 'long break' };
        default:
            return { counter: state.counter };
    }
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { counter: 'pomodoro' });

    return (
      <GlobalContext.Provider value={[state, dispatch]}>
          {children}
      </GlobalContext.Provider>
    );
}