export const fetchRestaurants = async()=>{
    try {
        const response = await fetch("../../restaurants.json");
        if(!response.ok){
            throw new Error("Failed to fetch mock data");
        }
        const data = await response.json();
        return new Promise((resolve)=>{
            setTimeout(()=>resolve({responseData: data}), 2000)
        })
    }catch(error){
        console.error(error);
    }
}