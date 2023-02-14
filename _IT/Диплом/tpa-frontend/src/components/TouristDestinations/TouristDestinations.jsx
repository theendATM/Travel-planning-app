import logo from '../img/logo.svg';
import "./TouristDestinations.css";
import { useEffect } from 'react';
import { useState } from 'react';
const TouristDestinations=()=>{

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };

  const [isShownSettings, setIsShownSettings] = useState(false);
  const handleClickSettings = event => {
    setIsShownSettings(current => !current);
  };

  const [count, setCount] = useState(30)
    const increment = () => {
          setCount(prevCount =>  prevCount + 1)
    }
    const decrement = () => {
      setCount(prevCount =>  prevCount - 1)
}

    return (
      <div className="profile">
        <div className="profileBlock">
          <div className="headerBlock">
            <span>Туристические места</span>
          </div>
            <div className="subtitle tds">
                <input type='text' placeholder="Город"></input>
                <input type='text' placeholder="Типы"></input>
                <button className="saveButton">Поиск</button>

            </div>
            <div className="activitiesList">
        <div className="activityBlock">
          <img src={logo} alt='' />
          <div className="activityBlockText">
            <span className="font27">Название</span>
            <span className="subtitle">Описание</span>
            <span>
              <span>Сложность: </span><span>1</span><br/>
              <span>Время нахождения: <span>30</span><span> минут</span></span>
            </span>
            
          </div>
          <div className="activityBlockButtons addIntoPlan">
            <button className="saveButton" onClick={handleClick}>Добавить в план</button>
            {isShown && (
            <div className='plansSelectList' o>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            )}
            
            
            <span className="personalSettings" onClick={handleClickSettings}>Персональные настройки</span>
            {isShownSettings && (
            <div className="personalSettingsOpen">
              <span className="minusTime" onClick={decrement}>-</span>&nbsp; &nbsp; <span className="timeValue">{count}</span> 
              <span> мин</span>&nbsp;&nbsp; <span onClick={increment} >+</span><br/>
              Обязательный визит<input type="checkbox" className="checkboxVisiting"></input>
            </div>)}
          </div>
        </div>
        <div className="activityBlock">
          <img src={logo} alt='' />
          <div className="activityBlockText">
            <span className="font27">Название</span>
            <span className="subtitle">Описание</span>
            <span>
              <span>Сложность: </span><span>1</span><br/>
              <span>Время нахождения: <span>30</span><span> минут</span></span>
            </span>
            
          </div>
          <div className="activityBlockButtons">
            <button className="saveButton">Добавить в план</button>
            <span>Персональные настройки</span>
          </div>
          </div>
          </div>
          </div>
          </div>

    );
}

export default TouristDestinations;