export const ACTIONS = {
    LOAD_SHOPPING_CART: "LOAD_SHOPPING_CART",
    UPDATE_CART: "UPDATE_CART"
}

export interface ShoppingAction {
    type: string,
    payload: any
}