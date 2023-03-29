import logo from "../img/logo.svg";
import "./TouristDestinations.css";
import { useEffect } from "react";
import { useState } from "react";
import GetData from "../../functions/Get/GetData.jsx";
import GetMereLandmarks from "../../functions/Get/GetMereLandmarks";
import Select from 'react-select';

const TouristDestinations = () => {

  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const [isShownSettings, setIsShownSettings] = useState(false);
  const handleClickSettings = (event) => {
    setIsShownSettings((current) => !current);
  };


  const [interests, setInterests] = useState();
  const getInterests = async () => {
    try {
      const result = await GetData("interests");
      setInterests(result);
    } catch {}
  };

  useEffect(() => {
    getInterests();
  }, []);

  const [cities, setCities] = useState();
  const getCities = async () => {
    try {
      const result = await GetData("cities");
      setCities(result);
    } catch {}
  };

  useEffect(() => {
    getCities();
  }, []);

  const [city, setCity] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleSelectChange(event) {
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedOptions(selectedValues);
    console.log(selectedOptions);
}

  const [mereLandmarks, setMereLandmarks] = useState();
  const getMereLandmarks = async () => {
    try {
      console.log(selectedOptions, city);
      console.log(selectedOptions);
      console.log(city);
      const result = await GetMereLandmarks(selectedOptions, city);
      setMereLandmarks(result);
    } catch {}
  };

  /*useEffect(() => {
    getMereLandmarks();
  }, []);*/

  const [count, setCount] = useState(30);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="profile">
      <div className="profileBlock">
        <div className="headerBlock">
          <span>Туристические места</span>
        </div>
        <div className="subtitle tds">
          <select /*multiple={true}*/ onChange={(e) => setCity(e.target.value)}>
            <option selected="true" disabled="disabled">
              Город
            </option>
            {cities ? (
              cities.map((city) => <option value={city.id}>{city.name}</option>)
            ) : (
              <option></option>
            )}
          </select>
          <select multiple={true} onChange={handleSelectChange} required >
            <option /*selected="true"*/ disabled="disabled">
              Интересы
            </option>
            {interests ? (
              interests.map((interest) => <option key={interest.id} value={interest.id}>{interest.name}</option>)
            ) : (
              <option></option>
            )}
          </select>
          <button className="saveButton" onClick={getMereLandmarks}>
            Поиск
          </button>
        </div>
        <div className="activitiesList">
          {mereLandmarks ? (
            mereLandmarks.map((mereLandmark) => (
              <div className="activityBlock">
                <img src={logo} alt="" />
                <div className="activityBlockText">
                  <span className="font27">{mereLandmark.name}</span>
                  <ul >{mereLandmark.interests.map((interest)=><li>{interest.name} </li>)}</ul>
                  <span>
                    <span>Сложность: </span>
                    <span>{mereLandmark.difficulty.name}</span>
                    <br />
                    <span>
                      Время нахождения: <span>{mereLandmark.visit_time}</span>
                      <span> минут</span>
                    </span>
                  </span>
                </div>
                <div className="activityBlockButtons addIntoPlan">
                  <button
                    className="saveButton addIntoPlanButton"
                    onClick={handleClick}
                  >
                    Добавить в план
                  </button>
                  {isShown && (
                    <div className="plansSelectList">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                  )}

                  <span
                    className="personalSettings"
                    onClick={handleClickSettings}
                  >
                    Персональные настройки
                  </span>
                  {isShownSettings && (
                    <div className="personalSettingsOpen">
                      <span
                        className="minusTime changeTimeButtons"
                        onClick={decrement}
                      >
                        -
                      </span>
                      &nbsp; &nbsp; <span className="timeValue">{count}</span>
                      <span> мин</span>&nbsp;&nbsp;{" "}
                      <span onClick={increment} className="changeTimeButtons">
                        +
                      </span>
                      <br />
                      Обязательный визит
                      <input
                        type="checkbox"
                        className="checkboxVisiting"
                      ></input>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div> По введенным параметрам ничего не найдено</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TouristDestinations;
