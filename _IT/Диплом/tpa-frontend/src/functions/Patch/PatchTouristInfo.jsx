import axios from "axios"

const PatchTouristInfo = async (age,name,interests,id) => {
    try
    {
        const result = await axios({
            method: "patch",
            url: "https://localhost:7020/tourist/edit",
            withCredentials: 'include',
            data: {
                age:age,
                name:name,
                "interest-ids":interests,
                "tourist-id":id
            },
            
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
        return null;
    }
}

export default PatchTouristInfo;