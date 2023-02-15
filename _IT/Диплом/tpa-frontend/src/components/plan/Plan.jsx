import { useNavigate } from "react-router-dom";
import "./PersonalPlans.css";
import ProfileModal from "../profile/ProfileModal";
import { useState } from "react";
import ModalChangePlanName from "./ModalChangePlanName";

const Plan = () => {
  const navigate = useNavigate();

  const [modalActive1, setModalActive1]=useState();
  return (
    <div className="profile">
      <div className="profileBlock">
        <div className="headerBlock">
          <span>Информация о поездке</span>
        </div>
        <table>
          <tr>
            <td>Название </td>
            <td>Москва 2020 </td>
            <td className="changeButton" onClick={()=>setModalActive1(true)}>Изменить</td>
          </tr>
          <tr>
            <td>Город </td>
            <td>Москва</td>
            <td className="changeButton"></td>
          </tr>
          <tr>
            <td>Бюджет (руб) </td>
            <td>30000</td>
            <td className="changeButton"></td>
          </tr>
          <tr>
            <td>Адрес размещения </td>
            <td>Автозаводская 2Б</td>
            <td className="changeButton"></td>
          </tr>
          <tr>
            <td>Сложность </td>
            <td>1</td>
            <td className="changeButton"></td>
          </tr>
          <tr>
            <td>Туристы </td>
            <td>Турист 1, Турист 2</td>
            <td className="changeButton"></td>
          </tr>
        </table>

        <table className="dayPlan">
          <tr>
            <td className="dayPlanSlot noPadding">22.12.2022, ПОНЕДЕЛЬНИК</td>
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
            <td className="noPadding">14:30 - 17:30: Третьяковская галерея</td>
          </tr>
          <tr>
            <td className="noPadding">
              17:30 - 18:30: Путь к месту размещения (Такси)
            </td>
          </tr>
        </table>
        <br />
        <table className="dayPlan">
          <tr>
            <td className="dayPlanSlot noPadding">22.12.2022, ПОНЕДЕЛЬНИК</td>
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
            <td className="noPadding">14:30 - 17:30: Третьяковская галерея</td>
          </tr>
          <tr>
            <td className="noPadding">
              17:30 - 18:30: Путь к месту размещения (Такси)
            </td>
          </tr>
        </table>
      </div>
      <ProfileModal active={modalActive1} setActive={setModalActive1}>
                <ModalChangePlanName/>
        </ProfileModal>
    </div>
  );
};
export default Plan;
