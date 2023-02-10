import "./PersonalPlans.css";
import { useNavigate } from "react-router-dom";

const PlanCreation1 = () => {
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
              <circle cx="110" cy="11" r="10" fill="white" stroke="#5E81FE" />
              <circle cx="160" cy="11" r="10" fill="white" stroke="#5E81FE" />
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
              <select>
                <option>Москва</option>
                <option>Тюмень</option>
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
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="modalTable">Туристы:</td>
            <td>
              <select>
                <option>Е</option>
                <option>Е</option>
                <option>Е</option>
                <option>Е</option>
                <option>Е</option>
              </select>
            </td>
          </tr>
        </table>
        <div className="modalButtons modalButtonsNextPage">
          <button className="cancelButton">Сохранить черновик</button>
          <button
            className="saveButton"
            onClick={() => navigate("/planCreation/2")}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlanCreation1;
