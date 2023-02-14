import { useNavigate } from "react-router-dom";

const PlanCreation4 = () => {
  const navigate = useNavigate();
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
              <circle cx="60" cy="11" r="10" fill="white" stroke="#5E81FE" />
              <circle cx="11" cy="11" r="10" fill="white" stroke="#5E81FE" />
              <circle cx="110" cy="11" r="10" fill="white" stroke="#5E81FE" />
              <circle cx="160" cy="11" r="10" fill="#5E81FE" />
            </svg>
          </span>
        </div>
        <div className="subtitle">
          <span>Подтверждение плана:</span>
        </div>

        <table>
          <tr>
            <td>
              <table className="dayPlan">
                <tr>
                  <td className="dayPlanSlot noPadding">
                    22.12.2022, ПОНЕДЕЛЬНИК
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">
                    10:00 - 10:30: Путь к объекту Красная площадь (Пешком)
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">10:30 - 12:30: Красная площадь</td>
                </tr>
                <tr>
                  <td className="noPadding">12:30 - 13:30: Обед</td>
                </tr>
                <tr>
                  <td className="noPadding">
                    13:30 - 14:30: Путь к объекту Третьяковская галерея (Такси)
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">
                    14:30 - 17:30: Третьяковская галерея
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">
                    17:30 - 18:30: Путь к месту размещения (Такси)
                  </td>
                </tr>
              </table>
            </td>
            <td className="outOfPlan">
              <span>НЕ ВОШЕДШИЕ В ПЛАН МЕСТА</span>
              <br></br>
              <span>
                Чтобы включить данные места в план, отметьте их обязательным
                посещением
              </span>
              <table className="titleOutOfPlan">
                <tr>
                  <td className="noPadding">Место 1</td>
                  <td className="noPadding">
                    Обязательное посещение<input type="checkbox" className="checkboxVisiting"></input>
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">Место 2</td>
                  <td className="noPadding">
                    Обязательное посещение<input type="checkbox" className="checkboxVisiting"></input>
                  </td>
                </tr>
              </table>
              <div className="refreshPlan">
                 <button className="saveButton">Обновить план</button>
              </div>
             
            </td>
          </tr>
          <tr>
            <td>
              <table className="dayPlan">
                <tr>
                  <td className="dayPlanSlot noPadding">
                    22.12.2022, ПОНЕДЕЛЬНИК
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">
                    10:00 - 10:30: Путь к объекту Красная площадь (Пешком)
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">10:30 - 12:30: Красная площадь</td>
                </tr>
                <tr>
                  <td className="noPadding">12:30 - 13:30: Обед</td>
                </tr>
                <tr>
                  <td className="noPadding">
                    13:30 - 14:30: Путь к объекту Третьяковская галерея (Такси)
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">
                    14:30 - 17:30: Третьяковская галерея
                  </td>
                </tr>
                <tr>
                  <td className="noPadding">
                    17:30 - 18:30: Путь к месту размещения (Такси)
                  </td>
                </tr>
              </table>
            </td>
            <td></td>
          </tr>
        </table>

        <div className="modalButtons modalButtonsNextPage">
          <button className="cancelButton">Сохранить черновик</button>
          <button
            className="saveButton">
            Сохранить план
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlanCreation4;
