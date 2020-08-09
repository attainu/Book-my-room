

const dataFromApi = (state=null,action)=>{
    if(action.type=="upadateFetchedDataFromApi"){
        state=action.payload;
        return state;
    }
    return state;
}
export default dataFromApi ;