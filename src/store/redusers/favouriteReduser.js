import {omit} from'lodash';
import { ADD_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../constants/constants";
import { getLocalStorage } from '../../Utils/localStorage/localStorage';

const initialState = getLocalStorage('store');

const favouriteReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_FROM_FAVOURITE:
            return  omit(state, [action.payload])
        default:
            return state;
    }
}

export default favouriteReduser;