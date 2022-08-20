import React, { createContext, FC, useEffect, useReducer } from 'react';
import { SessionAction, ACTIONS } from './actions';


export interface UserModel {
    id: string,
    first_name: string,
    last_name: string,
    is_admin: string,
}

export interface SessionState {
    user?: UserModel,
    isAdmin: boolean,
    dispatch?:  React.Dispatch<SessionAction>,
}


const defaultState: SessionState = {
    isAdmin: true
}

const reducer = (state:SessionState, action: SessionAction) => {
    switch (action.type) {
        case ACTIONS.LOAD_USER:
            return {...state, user: {...action.payload}, isAdmin: action.payload.is_admin};
        default:
            return state;
    }
}

export const SessionContextStore = createContext(defaultState);

type SessionContextProps = {
    children: JSX.Element[] | JSX.Element,
};

const SessionContext: FC<SessionContextProps> = ({children, ...props}) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
            dispatch({type: ACTIONS.LOAD_USER, payload: {id: '23213213', first_name: 'Itay', last_name: 'Cohen', is_admin: true}});
    }, []);

    return <SessionContextStore.Provider value={{...state, dispatch}}>
        {children}
    </SessionContextStore.Provider>
}

export default SessionContext;