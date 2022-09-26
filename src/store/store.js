import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import  { errorReducer, productReducer, productsReducer } from './reducer';
const reducer=combineReducers({
    products:productsReducer,
    product:productReducer,
    error:errorReducer,
})
const store=createStore(reducer,applyMiddleware(thunk));

export default store;