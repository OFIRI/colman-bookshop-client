export const ACTIONS = {
    LOAD_USER: "LOAD_USER",
    LOAD_TOKEN: "LOAD_TOKEN",
    LOGOUT: "LOGOUT"
}

export interface SessionAction {
    type: string,
    payload: any
}