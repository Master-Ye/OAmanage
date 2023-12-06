import $htp from "api"
export default {
 namespace:'user',
 state:{
    userInfo:null
 },
 reducers:{

 },
 effects:{
*login({payload},{put,call,select}){
const [data,msg] = yield call()
}
 }
}