import {useNavigate} from 'react-router-dom';
import './PersonalPlans.css';


const PersonalPlans = () => {

  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profileBlock">
        <div className="headerBlock">
          <span>Черновики</span>
        </div>
        <table>
          <tr>
            <td>Москва декабрь 2022 </td>
            <td className="changeButton">Изменить</td>
            <td className="changeButton bold">Сохранить план</td>
            <td className="deleteButton">Удалить</td>
          </tr>
          <tr>
            <td>Сочи август 2023</td>
            <td className="changeButton">Изменить</td>
            <td className="changeButton bold">Сохранить план</td>
            <td className="deleteButton">Удалить</td>
          </tr>
          <tr>
            <td className="noPadding">Каникулы в Москве</td>
            <td className="changeButton noPadding">Изменить</td>
            <td className="changeButton bold noPadding">Сохранить план</td>
            <td className="deleteButton noPadding">Удалить</td>
          </tr>
        </table>
        <div className="headerBlock">
          <span>Создать новый план</span>
        </div>
        <button className="saveButton" onClick={()=>navigate('/planCreation/1')}>Создать новый план</button>
      </div>
    </div>
  );
};
export default PersonalPlans;
