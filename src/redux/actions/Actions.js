import {SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT} from '../actionsTypes/ActionTypes'

export const setProducts = (products)=>{
    return{
        type: SET_PRODUCTS,
        payloud: products
    }
}

export const selectedProduct = (product)=>{
    return{
        type: SELECTED_PRODUCT,
        payloud: product
    }
}

export const removeSelectedProduct = ()=>{
    return{
        type: REMOVE_SELECTED_PRODUCT
    }
}