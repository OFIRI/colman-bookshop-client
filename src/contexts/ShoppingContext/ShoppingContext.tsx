import React, { createContext, FC, useEffect, useReducer } from 'react';
import {Book} from '../../types/Book';
import { ACTIONS, ShoppingAction } from './actions';

export interface Item {
    book: Book,
    quantity: number
}

export interface ShoppingCartType {
    [key: string]: Item
} 

export interface ShoppingState {
    shoppingCart: ShoppingCartType,
    dispatch?: React.Dispatch<ShoppingAction>,
    addToCart: (book:Book) => void,
    deleteOneFromCart: (book:Book) => void,
    deleteFromCart: (book:Book) => void,
}


const defaultState: ShoppingState = {
    shoppingCart: {},
    addToCart: () => console.log("unimplemented"),
    deleteOneFromCart: () => console.log("unimplemented"),
    deleteFromCart: () => console.log("unimplemented"),
}

const reducer = (state:ShoppingState, action: ShoppingAction) => {
    switch (action.type) {
        case ACTIONS.LOAD_SHOPPING_CART:
            return {...state, shoppingCart: {...action.payload.shoppingCart}};
        case ACTIONS.UPDATE_CART: 
            const { shoppingCart } = state;
            return {...state, shoppingCart: {...shoppingCart}}
        default:
            return state;
    }
}

export const ShoppingContextStore = createContext(defaultState);

type ShoppingContextProps = {
    children: JSX.Element[],
};

const ShoppingContext: FC<ShoppingContextProps> = ({children, ...props}) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
        const result = window.localStorage.getItem("shoppingCart")
        if(result) {
            const shoppingCart = JSON.parse(result);
            dispatch({type: ACTIONS.LOAD_SHOPPING_CART, payload: {shoppingCart}});
        }
    }, []);

    const addToCart = (book:Book) => {
        const { shoppingCart } = state;
        if(shoppingCart[book._id]) {
            ++shoppingCart[book._id].quantity;
        }else{
            shoppingCart[book._id] = { book, quantity: 1};
        }
        dispatch({type: ACTIONS.UPDATE_CART, payload: shoppingCart})
        window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }

    const deleteOneFromCart = (book:Book) => {
        const { shoppingCart } = state;
        if(shoppingCart[book._id]) {
            --shoppingCart[book._id].quantity;   
            dispatch({type: ACTIONS.UPDATE_CART, payload: shoppingCart})
            window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        }
    }

    const deleteFromCart = (book:Book) => {
        const { shoppingCart } = state;
        if(shoppingCart[book._id]) {
            delete shoppingCart[book._id];   
            dispatch({type: ACTIONS.UPDATE_CART, payload: shoppingCart})
            window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        }
    }


    return <ShoppingContextStore.Provider value={{...state, addToCart, deleteOneFromCart, deleteFromCart, dispatch}}>
        {children}
    </ShoppingContextStore.Provider>
}

export default ShoppingContext;