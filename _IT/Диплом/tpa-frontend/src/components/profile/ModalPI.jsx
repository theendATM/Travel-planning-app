import './Profile.css';
import PatchUserInfo from '../../functions/Patch/PatchUserInfo';
import { useState } from 'react';

const ModalPI=({active,setActive,email, name, phone})=>{

    const [newName, setNewName] = useState("");
    //setNewName(name);

    const doThings=()=>{
        PatchUserInfo(email,newName,phone);
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
                        <td className='modalTable'>Имя</td>
                        <td><input type='text' defaultValue={name} onChange={(e) => setNewName(e.target.value)}/></td>
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
export default ModalPI;