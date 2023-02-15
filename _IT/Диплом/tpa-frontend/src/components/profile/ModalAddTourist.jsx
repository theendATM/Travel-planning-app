import './Profile.css';
import { useState } from 'react';
import ProfileModal from './ProfileModal';

const ModalAddTourist=()=>{


return(
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Добавление нового туриста</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Имя</td>
                        <td><input type='text' placeholder='Введите имя'/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Возраст</td>
                        <td><input type='number' placeholder='Введите возраст'/></td>
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

    </div>
 )   
}
export default ModalAddTourist;