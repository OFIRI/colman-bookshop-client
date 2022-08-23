import axios from 'axios';
import React, { createContext, FC, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Utils/axios';
import { SessionAction, ACTIONS } from './actions';


export interface UserModel {
    id: string,
    _id: string,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    is_admin: boolean,
}

export interface SessionState {
    user?: UserModel,
    isAdmin: boolean,
    token?: string,
    dispatch?:  React.Dispatch<SessionAction>,
    login: ({ password, username }: { password: string; username: string; }) => Promise<void>,
    signUp: (user: UserModel) => Promise<void>,
    loadUser: () => Promise<void>,
    logout: () => Promise<void>
}


const defaultState: SessionState = {
    isAdmin: true,
    login: async () => console.log(""),
    signUp: async () => console.log(""),
    loadUser: async () => console.log(""),
    logout: async () => console.log("")
}

const reducer = (state:SessionState, action: SessionAction) => {
    switch (action.type) {
        case ACTIONS.LOAD_USER:
            return {...state, user: {...action.payload.user}, isAdmin: action.payload.user.is_admin, token: action.payload.token};
            case ACTIONS.LOAD_TOKEN:
                return {...state, token: action.payload};
                case ACTIONS.LOGOUT:
                    return {...state, token: null, user: null};
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
    const navigate = useNavigate();

    const login = async ({password, username}: {password: string, username: string}) => {
        const { data } = await axios.post(BASE_URL+'users/sign-in', { password, username});
        dispatch({type: ACTIONS.LOAD_USER, payload: data});
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user._id);
        navigate('/')
    }

    const signUp = async (user: UserModel) => { 
        const { data } = await axios.post(BASE_URL+'users/register', { ...user });
        dispatch({type: ACTIONS.LOAD_USER, payload: data});
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user._id);
        navigate('/')
    }

    const loadUser = async () => {
        const userId = localStorage.getItem('userId');
        if(!userId) return;
        const token = localStorage.getItem('token');
        const { data } = await axios.get(BASE_URL+'users/getUser/'+userId);
        dispatch({type: ACTIONS.LOAD_USER, payload: {user:data, token}});
        navigate('/')
    } 

    const logout = async () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        dispatch({type: ACTIONS.LOGOUT, payload: {}});
    } 


    useEffect(() => {
            const token = localStorage.getItem('token');
            loadUser();
            dispatch({type: ACTIONS.LOAD_TOKEN, payload: token});
    }, []);

    return <SessionContextStore.Provider value={{...state, login, signUp, loadUser, logout}}>
        {children}
    </SessionContextStore.Provider>
}

export default SessionContext;