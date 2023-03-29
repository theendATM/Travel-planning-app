import { useNavigate} from 'react-router-dom'
import logo from '../img/logo.svg'
import choice from '../img/choice.svg'
import exitIcon from '../img/exitIcon.svg'
import './Header.css';
import { useEffect } from 'react';
import Login from './Login';
import { useState } from "react";
import GetDataWithParams from '../../functions/Get/GetDataWithParams';
import Cookies from 'js-cookie';

const Header=()=>{
  const [modalActive1, setModalActive1]=useState();

    const navigate = useNavigate();

    useEffect(()=>{    
        var a =window.location.href;
        let button='';
        let buttons = document.querySelectorAll('.navButton');
          buttons.forEach(b => {
          b.classList.remove('highlight');
        
        });
    
        if(a.includes('profile'))
          button = document.querySelector('.profileNav');
        else if(a.includes('personalPlans') || a.includes('planCreation'))
          button = document.querySelector('.personalPlansNav');
        else if(a.includes('defaultPlans'))
          button = document.querySelector('.defaultPlansNav');
        else if(a.includes('touristDestinations'))
          button = document.querySelector('.touristDestinationsNav');
        if(button!=='')
          button.classList.add('highlight') ;
     
      });


      
    return(
        <div className='header'>
            <div className='headerItems'>
                <div className='headerButtons'>
                    <img src={logo} alt='' onClick={()=>navigate('/')}></img>
                    <span className='navButton profileNav' onClick={()=>navigate('/profile')}>Профиль</span>
                    <span className='navButton personalPlansNav' onClick={()=>navigate('/planCreation/1')}>Создание плана</span>
                    <span className='navButton defaultPlansNav' onClick={()=>navigate('/defaultPlans')}>Готовые планы</span>
                    <span className='navButton touristDestinationsNav' onClick={()=>navigate('/touristDestinations')}>Развлечения</span>
                </div>
                <div className='headerProfile'>
                    <span className='userNameHeader' onClick={()=>{
                        navigate('/profile')
                    }}>{Cookies.get('email')?Cookies.get('email'):"Аккаунт"}</span>
                    <img src={exitIcon} alt='' className='exitIcon' onClick={()=>{
                      document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                      navigate('/');
                    }}/>
                </div>
            </div>
            
            <div className='headerLine'>

            </div>
            <Login active={modalActive1} setActive={setModalActive1}>
                </Login>
        </div>
    )
}

export default Header;