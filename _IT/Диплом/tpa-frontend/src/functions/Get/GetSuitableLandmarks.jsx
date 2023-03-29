import axios from "axios"

const GetSuitableLandmarks = async (tourists,city,difficulties) => {
    try
    {
        const result = await axios.get(`https://localhost:7020/mereLandmarks?cityId=${city}
        &${tourists.map((n, index) => `touristIds=${n}&`)}
        &${difficulties.map((n, index) => `difficultyIds=${n}&`)}`);
        
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

export default GetSuitableLandmarks;