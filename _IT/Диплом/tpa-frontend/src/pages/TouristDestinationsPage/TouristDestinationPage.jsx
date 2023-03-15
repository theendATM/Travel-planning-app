import TouristDestinations from "../../components/TouristDestinations/TouristDestinations";
import Header from "../../components/header/Header";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const TouristDestinationsPage = () => {
  var navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      navigate("/");
    }
  }, []);
    return(
      <div className="mainPage">
        <Header/>
        <TouristDestinations/>
      </div>
    )
}
export default TouristDestinationsPage;