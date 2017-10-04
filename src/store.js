import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {stockReducer} from './reducers';

export default createStore(
    combineReducers({
        form: formReducer,
        stock: stockReducer
    })
)