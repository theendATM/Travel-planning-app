import axios from "axios"

const GetSuggestedAddress = async (text) => {

    const dictKey=process.env.REACT_APP_DICTIONARY_KEY;
    try
    {

        const result = await axios({
            method: "get",
            params:{
                q:text,
                locale:"ru_RU",
                key:dictKey,
                location:"37.6155, 55.7522"
            },
            url: "https://catalog.api.2gis.com/3.0/items",
            withCredentials: 'include',
            headers: { 
                "content-type": "application/json" 
            },  
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
        console.warn("response", error.response?.data)
    }
}

export default GetSuggestedAddress;