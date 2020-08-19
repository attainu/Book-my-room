const selectedSearch = (state="",action)=>{
    if(action.type == "upadateSearch"){
        state=action.payload;
        return state;
    }
    return state;
}
export default selectedSearch;