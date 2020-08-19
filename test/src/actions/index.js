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

export const viewRoomDetails = (data) => {
    return {
        type:"viewRoomDetails",
        payload:data
    }
}

export const upadateSearch=(data)=>{
    return{
        type:"upadateSearch",
        payload:data
    };
} 