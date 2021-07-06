import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// reducers, initial state argumeny of an empty object,
// apply middleware
export const store = createStore(reducers, {}, applyMiddleware(thunk));
