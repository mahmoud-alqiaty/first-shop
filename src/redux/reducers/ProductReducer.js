import {SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT} from '../actionsTypes/ActionTypes'

const initState = {
    products: [],
}

const prductReducer = (state = initState, {type, payloud})=>{
    switch(type){
        case SET_PRODUCTS: 
            return {
                products: payloud
            };
        
        default: return state
    }
}
export default prductReducer

export const selectedProductReducer = (state={}, {type, payloud})=>{
    switch (type) {
        case SELECTED_PRODUCT:
            return{...state, ...payloud}
            
        case REMOVE_SELECTED_PRODUCT:
            return{}
            
        default:
            return state;
    }
}