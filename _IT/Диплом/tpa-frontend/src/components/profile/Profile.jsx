import './Profile.css';
import ProfileModal from './ProfileModal';
import ModalPI from './ModalPI';
import ModalTourist from './ModalTourist';
import ModalAddTourist from './ModalAddTourist';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import GetDataWithParams from '../../functions/GetDataWithParams';
import Cookies from 'js-cookie';
import PostDeleteToutist from '../../functions/PostDeleteToutist';
import ModalPN from './ModalPN';

const Profile=()=>{

    const navigate=useNavigate();

    const [modalActive1, setModalActive1]=useState(false);
    const [modalActive2, setModalActive2]=useState(false);
    const [modalActive4, setModalActive4]=useState(false);
    const [modalActive6, setModalActive6]=useState(false);

    const [userName, setUserName]=useState();
      const getUserName = async () => 
        {
        try
        {
            const result = await GetDataWithParams("profile",Cookies.get('email'));
            console.log(Cookies.get('email'));
            setUserName(result);
        }
        catch
        {
            
        }
    }

    useEffect(() => {
      getUserName();
      }, []);
    console.log(userName);

    const DeleteTourist=(id)=>{
        PostDeleteToutist(id);
        window.location.reload();
    }

    return(
        <div className='profile'>
            <div className='profileBlock'>
                <div className='headerBlock'>
                    <span>Персональная информация</span>
                </div>
                <table>
                    <tr>
                        <td>Имя</td>
                        <td>{userName?userName.name:""}</td>
                        <td className='changeButton' onClick={()=>setModalActive1(true)}>Изменить</td>
                    </tr>
                    <tr>
                        <td>Номер телефона</td>
                        <td>{userName?userName.phone:""}</td>
                        <td className='changeButton' onClick={()=>setModalActive2(true)}>Изменить</td>
                        
                    </tr>
                    <tr>
                        <td className='noPadding'>E-mail</td>
                        <td className='noPadding'>{userName?userName.email:""}</td>
                    
                    </tr>
                </table>
            </div>

            <div className='profileBlock'>
                <div className='headerBlock'>
                    <span>Туристы</span>
                    <span className='changeButton' onClick={()=>setModalActive6(true)}>Добавить туриста</span>
                </div>
                <table>
                    {
                    userName ? userName.tourists.map((tourist) => 
                    <tr>
                  <td>{tourist.name}</td>
                  <td>Возраст: {tourist.age}</td>
                  <td className='changeButton'>Изменить</td>
                        <td key={tourist.id} className='deleteButton' 
                        onClick={
                         ()=>DeleteTourist(tourist.id)   

                        }>Удалить</td></tr>
                    ):<tr><td></td></tr>}
                </table>
            </div>

            <div className='profileBlock'>
                <div className='headerBlock'>
                    <span>Мои планы</span>
                    <span className='changeButton' onClick={()=>navigate('/planCreation/1')}>Создать план</span>
                </div>
                <table>
                {
                    userName ? userName.plans.map((plan) => 
                    <tr>
                  <td>{plan.name}</td>
                  <td>Город: {plan.city}</td>
                  <td>Даты: {plan.arrivalTime}-{plan.departureTime}</td>
                        <td className='deleteButton'>Удалить</td></tr>
                    ):<tr><td></td></tr>}
                </table>
            </div>
            <ModalPI active={modalActive1} setActive={setModalActive1} 
            name={userName?userName.name:""} email={userName?userName.email:""} phone={userName?userName.phone:""}>
                </ModalPI>
                <ModalPN active={modalActive2} setActive={setModalActive2} 
            name={userName?userName.name:""} email={userName?userName.email:""} phone={userName?userName.phone:""}>
                </ModalPN>


            <ModalAddTourist active={modalActive6} setActive={setModalActive6}>
            </ModalAddTourist>
        </div>
         
    )
}

export default Profile;