import React, {useContext, useReducer, createContext} from 'react';

// this is data layer
export const StateContext = createContext();


// Data provider
export const Stateprovider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);