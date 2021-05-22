import {createStore} from 'redux'
import RootReducer from './reducers/RootReducer'
import prductReducer from './reducers/ProductReducer'


const store = createStore(RootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store