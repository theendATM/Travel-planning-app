import './Profile.css';
import PatchUserInfo from '../../functions/PatchUserInfo';
import { useState } from 'react';

const ModalPN=({active,setActive,email, name, phone})=>{

    const [newPhone, setNewPhone] = useState("");

    const doThings=()=>{
        PatchUserInfo(email,name,newPhone);
        setActive(false);
        window.location.reload();
    }
return(
    <div className={active ? 'profileModal active' : 'profileModal'} onClick={()=>setActive(false)}>
    <div className='profileModalContent' onClick={e=>e.stopPropagation()}>
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Изменение персональной информации</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Номер телефона</td>
                        <td><input type='text' defaultValue={phone} onChange={(e) => setNewPhone(e.target.value)}/></td>
                    </tr>
                </table>
                <div className='modalButtons'>
                    <button className='cancelButton' onClick={()=>setActive(false)}>Отменить</button>
                    <button className='saveButton' onClick={doThings}>Сохранить</button>
                </div>
                
</div>
</div>
    </div>
 )   
}
export default ModalPN;