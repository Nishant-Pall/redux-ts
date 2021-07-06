import { combineReducers } from "redux";
import RepositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
    // repositories state's value is gonna come from
    // the RepositoriesReducer
    repositories: RepositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
