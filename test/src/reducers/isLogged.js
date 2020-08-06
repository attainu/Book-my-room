const isLogged = (state=false,action)=>{
    if(action.type=="updateLoggedIn"){
        state=action.payload;
        return state;
    }
    return state;
}
export default isLogged ;