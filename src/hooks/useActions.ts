import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
    const dispatch = useDispatch();

    // returns action creators and bind them to dispatch
    bindActionCreators(actionCreators, dispatch);
    // kinda like { searchRepositories: dispatch(searchRepositories)}
};
