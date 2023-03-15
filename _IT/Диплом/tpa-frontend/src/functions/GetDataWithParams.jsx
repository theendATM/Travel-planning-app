import axios from "axios"

const GetDataWithParams = async (urll, email) => {
    try
    {

        const result = await axios({
            method: "get",
            params:{
                email:email,
            },
            url: "https://localhost:7020/"+urll,
            withCredentials: 'include',
            headers: { 
                "content-type": "application/json" 
            },  
        })
        //const result = await axios.get('https://localhost:7020/profile');
        
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

export default GetDataWithParams;