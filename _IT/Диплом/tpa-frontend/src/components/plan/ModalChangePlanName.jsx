import '../profile/Profile.css';

const ModalChangePlanName=()=>{


return(
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Изменение названия поездки</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Название</td>
                        <td><input type='text' placeholder='Введите название'/></td>
                    </tr>
                </table>

    </div>
 )   
}
export default ModalChangePlanName;