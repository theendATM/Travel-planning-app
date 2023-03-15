import axios from "axios"

const PostLogin = async (email, password) => {
    try
    {
        const result = await axios({
            method: "post",
            url: "https://localhost:7020/login",
            withCredentials: 'include',
            data: {
                email:email,
                password:password,
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

export default PostLogin;