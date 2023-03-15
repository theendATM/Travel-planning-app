import Header from "../../components/header/Header";
import PlanCreation2 from "../../components/plan/PlanCreation2";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PlanCreation2Page = (children) => {
  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);
    return(
      <div className="mainPage">
        <Header/>
        <PlanCreation2/>
      </div>
    )
}
export default PlanCreation2Page;