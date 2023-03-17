import axios from "axios"

const AddTourist = async (email, name, interests, age) => {
    try
    {
        const result = await axios({
            method: "post",
            url: "https://localhost:7020/tourist/add",
            withCredentials: 'include',
            data: {
                "user-email":email,
                "interest-ids":interests,
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

export default AddTourist;