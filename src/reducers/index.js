import { combineReducers } from 'redux';
import termsReducer from './termsReducer';

export default combineReducers({
    terms: termsReducer
});
