import './Profile.css';
import ProfileModal from './ProfileModal';
import ModalPI from './ModalPI';
import ModalPN from './ModalPN';
import ModalEA from './ModalEA';
import ModalTourist from './ModalTourist';
import ModalAddTourist from './ModalAddTourist';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile=()=>{

    const navigate=useNavigate();

    const [modalActive1, setModalActive1]=useState(false);
    const [modalActive2, setModalActive2]=useState(false);
    const [modalActive3, setModalActive3]=useState(false);
    const [modalActive4, setModalActive4]=useState(false);
    const [modalActive6, setModalActive6]=useState(false);
    
    return(
        <div className='profile'>
            <div className='profileBlock'>
                <div className='headerBlock'>
                    <span>Персональная информация</span>
                </div>
                <table>
                    <tr>
                        <td>Имя и фамилия</td>
                        <td>Евгения Полуйкова</td>
                        <td className='changeButton' onClick={()=>setModalActive1(true)}>Изменить</td>
                    </tr>
                    <tr>
                        <td>Номер телефона</td>
                        <td>8 (900) 000-00-00</td>
                        <td className='changeButton' onClick={()=>setModalActive2(true)}>Изменить</td>
                    </tr>
                    <tr>
                        <td className='noPadding'>E-mail</td>
                        <td className='noPadding'>выаотыв@mail.ru</td>
                        <td className='noPadding changeButton' onClick={()=>setModalActive3(true)}>Изменить</td>
                    </tr>
                </table>
            </div>

            <div className='profileBlock'>
                <div className='headerBlock'>
                    <span>Туристы</span>
                    <span className='changeButton' onClick={()=>setModalActive6(true)}>Добавить туриста</span>
                </div>
                <table>
                    <tr>
                        <td>Евгения Полуйкова добрая</td>
                        <td>Поездки: 5</td>
                        <td className='changeButton' onClick={()=>setModalActive4(true)}>Изменить</td>
                        <td className='deleteButton'>Удалить</td>
                    </tr>
                    <tr>
                        <td>Евгения Полуйкова уставшая</td>
                        <td>Поездки: 10</td>
                        <td className='changeButton'>Изменить</td>
                        <td className='deleteButton'>Удалить</td>
                    </tr>
                    <tr>
                        <td className='noPadding'>Евгения Полуйкова нейтральна</td>
                        <td className='noPadding'>Поездки: 10</td>
                        <td className='noPadding changeButton'>Изменить</td>
                        <td className='noPadding deleteButton'>Удалить</td>
                    </tr>
                </table>
            </div>

            <div className='profileBlock'>
                <div className='headerBlock'>
                    <span>Мои планы</span>
                    <span className='changeButton' onClick={()=>navigate('/planCreation/1')}>Создать план</span>
                </div>
                <table>
                    <tr >
                        <td className='planDetailsButton' onClick={()=>navigate('/plan')}>Москва июль 2020</td>
                        <td>Туристы: 4</td>
                        <td className='deleteButton'>Удалить</td>
                    </tr>
                    <tr>
                        <td>Сочи август 2023</td>
                        <td>Туристы: - </td>
                        <td className='deleteButton'>Удалить</td>
                    </tr>
                    <tr>
                        <td className='noPadding'>Каникулы в Москве (стандартный план)</td>
                        <td className='noPadding'>Туристы: -</td>
                        <td className='noPadding deleteButton'>Удалить</td>
                    </tr>
                </table>
            </div>
            <ProfileModal active={modalActive1} setActive={setModalActive1}>
                <ModalPI/>
            </ProfileModal>

            <ProfileModal active={modalActive2} setActive={setModalActive2}>
                <ModalPN/>
            </ProfileModal>
            <ProfileModal active={modalActive3} setActive={setModalActive3}>
                <ModalEA/>
            </ProfileModal>
            <ProfileModal active={modalActive4} setActive={setModalActive4}>
                <ModalTourist/>
            </ProfileModal>
            <ProfileModal active={modalActive6} setActive={setModalActive6}>
                <ModalAddTourist/>
            </ProfileModal>
        </div>
         
    )
}

export default Profile;