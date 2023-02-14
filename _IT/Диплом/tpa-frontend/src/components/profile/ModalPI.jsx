import './Profile.css';
import { useState } from 'react';
import ProfileModal from './ProfileModal';

const ModalPI=()=>{


return(
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Изменение персональной информации</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Имя</td>
                        <td><input type='text' defaultValue={'Евгения'}/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Фамилия</td>
                        <td><input type='text' defaultValue={'Полуйкова'}/></td>
                    </tr>
                </table>
                

    </div>
 )   
}
export default ModalPI;