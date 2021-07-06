// Use this hook to bind the action creators to the dispatch function
// and export it to the component for optimizing the code
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
    // Get access to dispatch function
    // Used to dispatch an action to all the reducers
    const dispatch = useDispatch();

    // returns action creators and bind them to dispatch
    return bindActionCreators(actionCreators, dispatch);
    // kinda like { searchRepositories: dispatch(searchRepositories)}
};
