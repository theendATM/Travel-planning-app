import './Profile.css';


const ModalEA=()=>{

return(
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Изменение электронной почты</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>E-mail</td>
                        <td><input type='email' defaultValue={'sdfsdf@mail.ru'}/></td>
                    </tr>
                </table>
                <div className='modalButtons'>
                    <button className='cancelButton'>Отменить</button>
                    <button className='saveButton'>Сохранить</button>
                </div>

    </div>
 )
}
export default ModalEA;