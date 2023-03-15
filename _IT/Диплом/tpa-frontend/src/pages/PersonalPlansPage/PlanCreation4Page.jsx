import Header from "../../components/header/Header";
import PlanCreation4 from "../../components/plan/PlanCreation4";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PlanCreation4Page = (children) => {
  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);
    return(
      <div className="mainPage">
        <Header/>
        <PlanCreation4/>
      </div>
    )
}
export default PlanCreation4Page;