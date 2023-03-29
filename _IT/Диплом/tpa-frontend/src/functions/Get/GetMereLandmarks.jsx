import axios from "axios"

const GetMereLandmarks = async (interests,city) => {
    try
    {
        /*const result = await axios({
            method: "get",
            params:{
                "cityId":city,
                "interestIds": [1,2,3]
            },
            url: "https://localhost:7020/mereLandmarks",
            withCredentials: true,
            headers: { 
                "Content-Type": "application/json" 
            },  
        })*/
        //const result = await axios.get('https://localhost:7020/profile');
        const result = await axios.get(`https://localhost:7020/mereLandmarks?cityId=${city}&${interests.map((n, index) => `interestIds=${n}&`)}`);
        
        console.log(result);
        if(result.status === 200)
        {
            return result.data;
        }
        else
        {
            return null;
        }     
    }
    catch (error)
    {
        console.log(error);
        console.warn("response", error.response?.data)
    }
}

export default GetMereLandmarks;