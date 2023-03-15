import Header from "../../components/header/Header";
import PlanCreation1 from "../../components/plan/PlanCreation1";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PlanCreation1Page = (children) => {
  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);
    return(
      <div className="mainPage">
        <Header/>
        <PlanCreation1/>
      </div>
    )
}
export default PlanCreation1Page;