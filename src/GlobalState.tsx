import React, { createContext } from 'react';
import rootReducer, { Action, initialState } from './reducers';

export interface IGlobalState {}

export const GlobalState = createContext(initialState);
export const GlobalDispatch = createContext((() => Promise.resolve()) as Dispatch);

export type Dispatch = (action: Action | Thunk) => Promise<any>;
export type Thunk = (dispatch: React.Dispatch<Action>) => Promise<any>;

const isThunk = (action: any): action is Thunk => {
    return action instanceof Function;
};

const augmentedDispatch = (dispatch: React.Dispatch<Action>) => (
    input: Thunk | Action,
): Promise<any> => {
    if (isThunk(input)) {
        return input(dispatch);
    } else {
        dispatch(input);
        return new Promise<any>(() => ({}));
    }
};

export function GlobalStateProvider(props: any) {
    const [state, dispatch] = React.useReducer(rootReducer, initialState);
    return (
        <GlobalDispatch.Provider value={augmentedDispatch(dispatch) as Dispatch}>
            <GlobalState.Provider value={state}>{props.children}</GlobalState.Provider>
        </GlobalDispatch.Provider>
    );
}
