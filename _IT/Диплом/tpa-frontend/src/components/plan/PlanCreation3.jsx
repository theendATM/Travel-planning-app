import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import GetData from "../../functions/Get/GetData.jsx";
import GetSuggestedAddress from "../../functions/Maps/SearchAddress.jsx";

const PlanCreation3 = () => {
  const navigate = useNavigate();

  const [movingTypes, setMovingTypes] = useState();
  const getMovingTypes = async () => {
    try {
      const result = await GetData("movingTypes");
      setMovingTypes(result);
    } catch {}
  };

  useEffect(() => {
    getMovingTypes();
  }, []);

  const [multSelect1, setMultSelect1] = useState(false);

  const [places, setPlaces] = useState([]);
  const [rplaces, setRplaces] = useState([]);
  /*const SuggestAddress=(text)=>{
    setPlaces(GetSuggestedAddress(text));
    console.log(places);
  }*/

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleInputChange = (value) => {
    timeout(2000);
    if (value.length >2) {
      GetSuggestedAddress(value).then(setRplaces);
      setPlaces(rplaces.result.items);
      //console.log(places);
    }

    
  };

  const [selectedPlace, setSelectedPlace] = useState();

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
                cx="11"
                cy="11"
                r="10"
                fill="white"
                stroke="#5E81FE"
                onClick={() => navigate("/planCreation/1")}
              />
              <circle
                cx="160"
                cy="11"
                r="10"
                fill="white"
                stroke="#5E81FE"
                onClick={() => navigate("/planCreation/4")}
              />
              <circle cx="110" cy="11" r="10" fill="#5E81FE" />
            </svg>
          </span>
        </div>
        <div className="subtitle">
          <span>Дополнительная информация:</span>
        </div>

        <table>
          <tr>
            <td>Адрес места размещения:</td>
            <td>
              <input
                type="text"
                placeholder="Введите адрес"
                onChange={(e) => handleInputChange(e.target.value)}
              ></input>
              <select>
                {places ? (
                  places.map((place) => <option onSelect={(e) => setSelectedPlace(e.target.value)}>{place.name}</option>)
                ) : (
                  <option></option>
                )}
              </select>
            </td>
          </tr>
          <tr>
            <td className="modalTable">Дата и время прибытия:</td>
            <td>
              <input type="datetime-local" />
            </td>
          </tr>
          <tr>
            <td className="modalTable">Дата и время убытия:</td>
            <td>
              <input type="datetime-local" />
            </td>
          </tr>
          <tr>
            <td className="modalTable">Желаемое время выхода из дома:</td>
            <td>
              <input type="time" />
            </td>
          </tr>
          <tr>
            <td className="modalTable">Желаемое время прибытия домой:</td>
            <td>
              <input type="time" />
            </td>
          </tr>

          <tr>
            <td className="modalTable">Предпочитаемый вид перемещения:</td>
            <td>
              <select
                multiple
                className={
                  multSelect1 ? "multSelect activeMultSelect" : "multSelect"
                }
              >
                <option onClick={() => setMultSelect1(!multSelect1)}>
                  Типы перемещений
                </option>
                {movingTypes ? (
                  movingTypes.map((movingType) => (
                    <option>{movingType.name}</option>
                  ))
                ) : (
                  <option></option>
                )}
              </select>
            </td>
          </tr>
        </table>

        <div className="modalButtons modalButtonsNextPage">
          <button className="cancelButton">Отменить</button>
          <button
            className="saveButton"
            onClick={() => navigate("/planCreation/4")}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlanCreation3;
