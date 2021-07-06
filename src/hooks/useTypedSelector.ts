// useSelector doesn't know about data inside the redux store
// So we have to make react-redux know what kind of data is it
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

// exporting typed information fo rootstate
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
