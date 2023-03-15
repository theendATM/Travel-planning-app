import Profile from '../../components/profile/Profile';
import Header from "../../components/header/Header";
import './ProfilePage.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProfilePage = () => {

  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);

    return(
      <div className="mainPage">
        <Header/>
        <Profile/>   
      </div>
    )
}
export default ProfilePage;