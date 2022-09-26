import axios from 'axios'


const instance=axios.create({
    baseURL:'https://api-dev.yeshtery.com/v1/yeshtery'
})

// axios.interceptors.response.use( (response)=> response.data,
//     (error)=> Promise.reject(error.response.data));
export default instance 
export const imgBase='https://api-dev.yeshtery.com/v1/files/'