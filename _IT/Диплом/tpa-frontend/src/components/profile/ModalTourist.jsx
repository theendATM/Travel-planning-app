import './Profile.css';
import { useState } from 'react';
import ProfileModal from './ProfileModal';

const ModalTourist=()=>{


return(
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Изменение информации о туристе</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Имя</td>
                        <td><input type='text' defaultValue={'Евгения K'}/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Возраст</td>
                        <td><input type='number' defaultValue={'21'}/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Интересы</td>
                        <td>
                            <select>
                                <option>1</option>
                                <option>2</option>
                            </select>

                            </td>
                    </tr>
                </table>
                <div className='modalButtons'>
                    <button className='cancelButton'>Отменить</button>
                    <button className='saveButton'>Сохранить</button>
                </div>

    </div>
 )   
}
export default ModalTourist;