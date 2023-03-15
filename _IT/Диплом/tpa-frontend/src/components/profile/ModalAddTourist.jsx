import './Profile.css';
import { useState } from 'react';
import { useEffect } from 'react';
import GetData from '../../functions/GetData.jsx';
import ProfileModal from './ProfileModal';

const ModalAddTourist=()=>{

    const [interests, setInterests]=useState();
    const getInterests = async () => 
    {
        try
        {
            const result = await GetData("interests");
            setInterests(result);
        }
        catch
        {
            
        }
    }

    useEffect(() => {
        getInterests();
      }, []);

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
                        <select /*multiple={true}*/>
              <option selected="true" disabled="disabled">Интересы</option>
                {interests ? interests.map((interest) => 
                  <option>{interest.name}</option>
               ):<option></option>}
               </select>

                            </td>
                    </tr>
                </table>

    </div>
 )   
}
export default ModalAddTourist;