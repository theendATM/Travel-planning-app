import Header from "../../components/header/Header";
import './MainPage.css';
import Login from "../../components/header/Login";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";

const MainPage = () => {

  const [modalActive1, setModalActive1]=useState();
  useEffect(() => {
    if(Cookies.get('email')===null || Cookies.get('email')===undefined || Cookies.get('email').length===0){
      setModalActive1(true)
    }
  }, []);

    return(
      <div className="mainPage">
        <Header/>
        <div className="mainPageDesc">
          <span>Планируйте свои поездки эффективно!</span>
          <div className="mainPageAdvantages">
            <span>Как работать с сервисом:</span>
            <ol>
              <li>Добавьте туристов во вкладке "Профиль".</li>
              <li>Перейдите к созданию плана в вкладке "Создание плана".</li>
              <li>Заполните информацию о поезке. Чем больше полей Вы заполните,
                 тем персонализированнее будет план.</li>
              <li>Выберите интересующие развлечения.
                При необходимости персонализируйте их в опции "Персональные настройки".</li>
                <li>
                  На основе введенных данных, Вам будет предложен план поезки. 
                  Вы можете сохранить его или добавить другие места.
                  Если план не устраивает, вернитесь на предыдущие шаги и скорректируйте вводные данные.
                </li>
                <li>Наслаждайтесь поездкой!</li>
            </ol>
            <br/>
            <span className="usualTextNotion">С более подробной инструкцией о работе с сервисом вы можете ознакомиться <a href="">тут</a>  </span>
          </div>
        </div>
        <Login active={modalActive1} setActive={setModalActive1}>
          </Login>
      </div>
    )
}
export default MainPage;