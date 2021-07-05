// WE HANDLE ACTIONS IN THE REDUCER AND RETURN STATES HERE
// IT GETS INPUT AS STATES AND IT PROCESSES ACTIONS AND
// EVENTUALLY A NEW STATE IS RETURNED

import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

// WE ALMOST EVERYTIME USE SWITCH CASES IN REDUCERS
const RepositoriesReducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default RepositoriesReducer;
