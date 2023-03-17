import '../profile/Profile.css';
import AddressSearch from '../../functions/SearchMap';

const ModalAddPlace=()=>{


return(
    <div className='modalChild'>
        <div className='headerText'> 
                    <span>Добавление места для посещения</span>
                </div>
                
                <table>
                    <tr>
                        <td className='modalTable'>Название</td>
                        <td><input type='text' placeholder='Введите название'/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Время нахождения (мин)</td>
                        <td><input type="number" placeholder='Введите время'/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Адрес</td>
                        <td><AddressSearch/></td>
                    </tr>
                    <tr>
                        <td className='modalTable'>Обязательное посещения</td>
                        <td><input type='checkbox'/></td>
                    </tr>
                </table>

    </div>
 )   
}
export default ModalAddPlace;