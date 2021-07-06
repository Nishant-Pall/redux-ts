// ACTION CREATORS MAKE REQUEST LIKE THE GET
// REQUEST IN THIS CASE

import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

// dispatch is used to manually dispatch
// actions directly into the redux store
// and get processed by the reducers
export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                    params: {
                        text: term,
                    },
                }
            );

            const names = data.objects.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message,
            });
        }
    };
};
