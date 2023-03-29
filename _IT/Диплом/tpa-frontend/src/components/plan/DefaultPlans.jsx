import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import GetData from '../../functions/Get/GetData.jsx';

const DefaultPlans=()=>{

  const navigate = useNavigate();

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


      const [cities, setCities]=useState();
      const getCities = async () => 
          {
              try
              {
                  const result = await GetData("cities");
                  setCities(result);
              }
              catch
              {
                  
              }
          }
      
          useEffect(() => {
              getCities();
            }, []);

    return (
      <div className="profile">
        <div className="profileBlock">
          <div className="headerBlock">
            <span>Готовые планы</span>
          </div>
            <div className="subtitle tds">
            <select /*multiple={true}*/>
              <option selected="true" disabled="disabled">Город</option>
                {cities ? cities.map((city) => 
                  <option>{city.name}</option>
               ):<option></option>}
               </select>
                <input type='number' className="inputSize" placeholder="Дней"></input>
                <select /*multiple={true}*/>
              <option selected="true" disabled="disabled">Интересы</option>
                {interests ? interests.map((interest) => 
                  <option>{interest.name}</option>
               ):<option></option>}
               </select>
                <button className="saveButton">Поиск</button>
            </div>
            <div className="activitiesList">
        <div className="activityBlock" onClick={()=>navigate('/plan')}>
          <img src={logo} alt='' />
          <div className="activityBlockText">
            <span className="font27">Название</span>
            <span className="subtitle">Описание</span>
            <span>
              <span>Сложность: </span><span>1</span><br/>
              <span>Длительность: <span>5</span><span> дней</span></span>
            </span>
            
          </div>
          <div className="activityBlockButtons">
            <button className="saveButton">Сохранить план</button>

          </div>
        </div>
        </div>
        </div>
        </div>

    );
}

export default DefaultPlans;