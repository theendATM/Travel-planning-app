import "./Profile.css";
import IMask from "imask";
import { useEffect } from "react";

const ModalPN = () => {
  useEffect(() => {
    var element = document.getElementById("phone");
    var maskOptions = {
      mask: "+{7}(000)000-00-00",
      lazy: false,
    };
    var mask = new IMask(element, maskOptions);
  });
  return (
    <div className="modalChild">
      <script src="https://unpkg.com/imask"></script>
      <div className="headerText">
        <span>Изменение номера телефона</span>
      </div>

      <table>
        <tr>
          <td className="modalTable">Номер телефона</td>
          <td>
            <input id="phone" type="text" placeholder="+7(900)000-00-00" />
          </td>
        </tr>
      </table>
      <div className="modalButtons">
        <button className="cancelButton">Отменить</button>
        <button className="saveButton">Сохранить</button>
      </div>
    </div>
  );
};
export default ModalPN;
