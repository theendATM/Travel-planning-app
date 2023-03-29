import axios from "axios"

const PostDeleteToutist = async (id) => {
    try
    {
        const result = await axios({
            method: "post",
            url: "https://localhost:7020/tourist/delete",
            withCredentials: 'include',
            data: {
                id:id,
            },
            
            /*headers: { "Content-Type": "multipart/form-data" },
            email:"e1",
            password:"12345678",*/
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

export default PostDeleteToutist;