import {createStore,applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {stockReducer} from './reducers';
import {loadAuthToken} from './local-storage';
import {setAuthToken} from './actions/auth';


const store = createStore(
    combineReducers({
        form: formReducer,
        stock: stockReducer
    }),
    applyMiddleware(thunk)
    //compose(applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
)

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}
export default store;