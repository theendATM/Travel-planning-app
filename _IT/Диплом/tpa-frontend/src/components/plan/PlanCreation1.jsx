import "./PersonalPlans.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import GetData from "../../functions/Get/GetData.jsx";
import GetDataWithParams from "../../functions/Get/GetDataWithParams";
import Cookies from "js-cookie";
import PlanCreation2 from "./PlanCreation2";

const PlanCreation1 = () => {
  const navigate = useNavigate();

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

  const [difficulties, setDifficulties] = useState();
  const getDifficulties = async () => {
    try {
      const result = await GetData("difficulties");
      setDifficulties(result);
    } catch {}
  };

  useEffect(() => {
    getDifficulties();
  }, []);

  const [userName, setUserName] = useState();

  const getUserName = async () => {
    try {
      const result = await GetDataWithParams("profile", Cookies.get("email"));
      //console.log(Cookies.get("email"));
      setUserName(result);
    } catch {}
  };

  useEffect(() => {
    getUserName();
  }, []);

  const [multSelect1, setMultSelect1] = useState(false);
  const [multSelect2, setMultSelect2] = useState(false);

  const [city, setCity] = useState("");
  const [selectedTourists, setSelectedTourists] = useState([]);

  function handleSelectTouristsChange(event) {
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedTourists(selectedValues);
    console.log(selectedTourists);
}

const [selectedDifficulties, setSelectedDifficulties] = useState([]);

  function handleSelectDifficultiesChange(event) {
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedDifficulties(selectedValues);
    console.log(selectedDifficulties);
}

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
              <circle
                cx="60"
                cy="11"
                r="10"
                fill="white"
                stroke="#5E81FE"
                onClick={() => navigate("/planCreation/2")}
              />
              <circle
                cx="110"
                cy="11"
                r="10"
                fill="white"
                stroke="#5E81FE"
                onClick={() => navigate("/planCreation/3")}
              />
              <circle
                cx="160"
                cy="11"
                r="10"
                fill="white"
                stroke="#5E81FE"
                onClick={() => navigate("/planCreation/4")}
              />
              <circle cx="11" cy="11" r="10" fill="#5E81FE" />
            </svg>
          </span>
        </div>
        <div className="subtitle">
          <span>Основная информация:</span>
        </div>

        <table>
          <tr>
            <td>Название:</td>
            <td>
              <input type="text" placeholder="Название плана" />
            </td>
          </tr>
          <tr>
            <td className="modalTable">Город:</td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td>Бюджет (руб):</td>
            <td>
              <input type="number" placeholder="Бюджет (руб)" />
            </td>
          </tr>
          <tr>
            <td className="modalTable">Предпочитаемая сложность:</td>
            <td>
            <select multiple onChange={handleSelectDifficultiesChange}
              className={multSelect2 ? 'multSelect activeMultSelect' : 'multSelect'}>
              <option onClick={()=>setMultSelect2(!multSelect2)}>
                  Предпочитаемая сложность
                </option>
                {difficulties ? (
                  difficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
                  ))
                ) : (
                  <option></option>
                )}
              </select>
            </td>
          </tr>
          <tr>
            <td className="modalTable">Туристы:</td>
            <td>
              <select multiple  onChange={handleSelectTouristsChange}
              className={multSelect1 ? 'multSelect activeMultSelect' : 'multSelect'}>
              <option onClick={()=>setMultSelect1(!multSelect1)}>
                  Туристы
                </option>
              {userName ? (
            userName.tourists.map((tourist) => (
                <option key={tourist.id} value={tourist.id}>{tourist.name}</option>))):<option/>}
              </select>
            </td>
          </tr>
        </table>
        <div className="modalButtons modalButtonsNextPage">
          <button className="cancelButton">Отменить</button>
          <button
            className="saveButton"
            onClick={() => 
              {Cookies.set('city', city, { expires: 7 }); 
              Cookies.set('difficulties', selectedDifficulties, { expires: 7 });
              Cookies.set('tourists', selectedTourists, { expires: 7 });
              navigate("/planCreation/2")}}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlanCreation1;
