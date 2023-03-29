import axios from "axios"

const PatchUserInfo = async (email, name,phone) => {
    try
    {
        const result = await axios({
            method: "patch",
            url: "https://localhost:7020/profile/edit",
            withCredentials: 'include',
            params: {
                email:email,
                phone:phone,
                name:name
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