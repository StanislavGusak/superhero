import { combineReducers } from "redux";
import favouriteReduser from "./favouriteReduser";

export default combineReducers({
    favouriteReduser: favouriteReduser,
    test: () => 'test reduser'
});

