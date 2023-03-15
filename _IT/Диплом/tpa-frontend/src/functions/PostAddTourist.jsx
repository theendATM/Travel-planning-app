import axios from "axios"

const PatchUserInfo = async (email, name, interests, age) => {
    try
    {
        const result = await axios({
            method: "post",
            url: "https://localhost:7020/tourist/add",
            withCredentials: 'include',
            params: {
                email:email,
                interests:interests,
                name:name,
                age:age
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

export default PatchUserInfo;