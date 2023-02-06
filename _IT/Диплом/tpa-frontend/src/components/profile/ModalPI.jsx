import './Profile.css';

const ModalPI=()=>{

return(
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Изменение персональной информации</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Имя</td>
                        <td>Евгения</td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Фамилия</td>
                        <td>Полуйкова</td>
                    </tr>
                </table>
                <div className='modalButtons'>
                    <button className='cancelButton'>Отменить</button>
                    <button className='saveButton'>Сохранить</button>
                </div>

    </div>
 )   
}
export default ModalPI;