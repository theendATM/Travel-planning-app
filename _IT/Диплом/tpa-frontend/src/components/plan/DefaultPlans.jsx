import logo from '../img/logo.svg';
const DefaultPlans=()=>{
    return (
      <div className="profile">
        <div className="profileBlock">
          <div className="headerBlock">
            <span>Готовые планы</span>
          </div>
            <div className="subtitle tds">
                <input type='text' placeholder="Город"></input>
                <input type='number' placeholder="Дней"></input>
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