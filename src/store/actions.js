import server from "../api/server"
import { add_error, get_product, get_products } from "./constants"
export const getProducts=()=>async(dispatch)=>{
    try {
        const {data:{products}}=await server.get('/products')
        
        dispatch({type:get_products,payload:products})
    } catch (e) {
        dispatch({type:add_error,payload:e.response.data})
    }
}
export const getProduct=(id)=>async dispatch=>{
    try {
        const {data}=await server.get(`/product`,{params:{product_id:id}})
        // console.log('action',data.variants)
        dispatch({type:get_product,payload:data})
    } catch (e) {
        dispatch({add_error,payload:e.response.data})
    }
}