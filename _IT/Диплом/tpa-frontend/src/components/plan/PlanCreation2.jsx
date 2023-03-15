import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalAddPlace from "./ModalAddPlace";
import logo from '../img/logo.svg';
import ProfileModal from '../profile/ProfileModal';

const PlanCreation2 = () => {
  const navigate = useNavigate();
  const [modalActive1, setModalActive1]=useState(false);

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };

  const [count, setCount] = useState(30)
    const increment = () => {
          setCount(prevCount =>  prevCount + 1)
    }
    const decrement = () => {
      setCount(prevCount =>  prevCount - 1)
}
const [isShownSettings, setIsShownSettings] = useState(false);
  const handleClickSettings = event => {
    setIsShownSettings(current => !current);
  };
 
  return (
    <div className="profile">
      <div className="profileBlock">
        <div className="headerBlock">
          <span>Создание плана</span>
          <span className="planProgress">
            <svg
              width="171"
              height="22"
              viewBox="0 0 171 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="21" y1="12.5" x2="50" y2="12.5" stroke="#697CA6" />
              <line x1="70" y1="12.5" x2="100" y2="12.5" stroke="#697CA6" />
              <line x1="120" y1="12.5" x2="150" y2="12.5" stroke="#697CA6" />
              <circle cx="11" cy="11" r="10" fill="white" stroke="#5E81FE" onClick={()=>navigate('/planCreation/1')}/>
              <circle cx="110" cy="11" r="10" fill="white" stroke="#5E81FE" onClick={()=>navigate('/planCreation/3')}/>
              <circle cx="160" cy="11" r="10" fill="white" stroke="#5E81FE" onClick={()=>navigate('/planCreation/4')}/>
              <circle cx="60" cy="11" r="10" fill="#5E81FE" />
            </svg>
          </span>
        </div>
        <div className="subtitle pc2">
          <span>Выбор туристических мест:</span>
          <input type='text' placeholder="Поиск мест"></input>
          <span className="addPlaceButton" onClick={()=>setModalActive1(true)}> Добавить свое место</span>
        </div>

        <div className="activitiesList">
        <div className="activityBlock">
          <img src={logo} alt='' />
          <div className="activityBlockText">
            <span className="font27">Название</span>
            <span className="subtitle">Описание</span>
            <span>
              <span>Сложность: </span><span>1</span><br/>
              <span>Время нахождения: <span>{count}</span><span> минут</span></span>
            </span>
            
          </div>
          <div className="activityBlockButtons">
            <button className="saveButton addIntoPlanButton">Добавить в план</button>
            <span className="personalSettings" onClick={handleClickSettings}>Персональные настройки</span>
            {isShownSettings && (
            <div className="personalSettingsOpen">
              <span className="minusTime changeTimeButtons" onClick={decrement} >-</span>&nbsp; &nbsp; <span className="timeValue">{count}</span> 
              <span> мин</span>&nbsp;&nbsp; <span onClick={increment} className='changeTimeButtons'>+</span><br/>
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
        

        
        <div className="modalButtons modalButtonsNextPage brButtons">
          <button className="cancelButton">Отменить</button>
          <button
            className="saveButton"
            onClick={() => navigate("/planCreation/3")}>
            Далее
          </button>
        </div>
      </div>
      <ProfileModal active={modalActive1} setActive={setModalActive1}>
                <ModalAddPlace/>
      </ProfileModal>
    </div>
  );
};
export default PlanCreation2;
