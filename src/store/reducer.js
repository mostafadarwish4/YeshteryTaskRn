import { add_error, get_product, get_products } from "./constants"

export const productsReducer= (state=[],action)=>{
    switch(action.type){
        case get_products:
            return action.payload
        default:
            return state
    }
}
export const productReducer=(state='',action)=>{
    switch(action.type){
        case get_product:
            return action.payload
        default:
            return state
    }
}
export const errorReducer=(state='',action)=>{
    switch(action.type){
        case add_error:
            return action.payload
        default:
            return state
    }
}