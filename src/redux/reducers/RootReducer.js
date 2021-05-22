import{combineReducers} from 'redux'
import prductReducer, { selectedProductReducer } from './ProductReducer'

const RootReducer = combineReducers({
    allProducts: prductReducer,
    product: selectedProductReducer
})

export default RootReducer