import Header from "../../components/header/Header";
import PlanCreation3 from "../../components/plan/PlanCreation3";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PlanCreation3Page = (children) => {
  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);
    return(
      <div className="mainPage">
        <Header/>
        <PlanCreation3/>
      </div>
    )
}
export default PlanCreation3Page;