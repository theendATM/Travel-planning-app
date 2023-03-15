import Header from "../../components/header/Header";
import PersonalPlans from "../../components/plan/PersonalPlans";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PersonalPlansPage = () => {
  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);
    return(
      <div className="mainPage">
        <Header/>
        <PersonalPlans/>
      </div>
    )
}
export default PersonalPlansPage;