import '../profile/Profile.css';
import { useState } from 'react';
import { useEffect } from 'react';
import PostLogin from '../../functions/Post/PostLogin';
import Header from './Header';
import Cookies from 'js-cookie';

const Login=({active,setActive})=>{

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
    const postData = async () => 
    {
        try
        {
            var res=await PostLogin(email,password);
            if(res==null){
                console.log("Неверный логин или пароль")
                //document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
                
            else{
                setActive(false);
                //document.cookie="username="+email+";";
                Cookies.set('email', email, { expires: 7 });
                }
            }
                
        catch
        {
        }
    }

    useEffect(() => {
        postData();
      }, []);

return(
    <div className={active ? 'profileModal active' : 'profileModal'} onClick={()=>setActive(false)}>
            <div className='profileModalContent' onClick={e=>e.stopPropagation()}>

            
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Вход в аккаунт</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Email</td>
                        <td><input type='email' placeholder='Введите email' 
                        onChange={(e) => setEmail(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Пароль</td>
                        <td><input type='password' placeholder='Введите пароль' 
                        onChange={(e) => setPassword(e.target.value)}/></td>
                    </tr>
                </table>
                
                

    </div>
    <div className='modalButtons'>
                    <button className='cancelButton' onClick={()=>setActive(false)}>Отменить</button>
                    <button className='saveButton' onClick={postData}>Войти</button>
                </div>
            </div>
        </div>
 )   
}
export default Login;