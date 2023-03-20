import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from'redux-devtools-extension';
import rootReduser from './redusers';
import thunk from 'redux-thunk';
import { setLocalStorage } from '../Utils/localStorage/localStorage';

const store = createStore(
    rootReduser, 
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    setLocalStorage('store', store.getState().favouriteReduser)
});

export default store;