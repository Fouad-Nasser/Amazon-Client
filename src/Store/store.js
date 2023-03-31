import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './Reducers/cartReducer';

const reducer = combineReducers({
    cart: cartReducer
});

// use localStorage if user not login
const cartItems = localStorage.getItem('cartItems')?
                    JSON.parse(localStorage.getItem('cartItems')):[];

const initState = {
    cart:{cartItems}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;