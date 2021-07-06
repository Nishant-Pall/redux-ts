import { combineReducers } from "redux";
import RepositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
    // repositories state's value is gonna come from
    // the RepositoriesReducer
    repositories: RepositoriesReducer,
});

export default reducers;

// Creating a type that says what's the type of
// data in the store
// getting return type and assign it to RootState type
export type RootState = ReturnType<typeof reducers>;
