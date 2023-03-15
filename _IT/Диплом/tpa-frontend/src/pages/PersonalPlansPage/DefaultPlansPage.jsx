import Header from "../../components/header/Header";
import DefaultPlans from "../../components/plan/DefaultPlans";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DefaultPlansPage = () => {
  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);
  
    return(
      <div className="mainPage">
        <Header/>
        <DefaultPlans/>
      </div>
    )
}
export default DefaultPlansPage;