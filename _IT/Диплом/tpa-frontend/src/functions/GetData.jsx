import axios from "axios"

const GetData = async (urll) => {
    try
    {
        const result = await axios({
            method: "get",
            url: "https://localhost:7020/"+urll,
            withCredentials: 'include'
        })
        
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
    }
}

export default GetData;