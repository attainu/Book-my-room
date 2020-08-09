export const upadateLoggedIn=(data)=>{
    return{
        type:"updateLoggedIn",
        payload:data
    };
} 
export const upadateFetchedDataFromApi=(data)=>{
    return{
        type:"upadateFetchedDataFromApi",
        payload:data
    };
} 