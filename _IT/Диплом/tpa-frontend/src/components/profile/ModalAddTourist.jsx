import "./Profile.css";
import { useState } from "react";
import { useEffect } from "react";
import GetData from "../../functions/GetData.jsx";
import AddTourist from "../../functions/PostAddTourist";
import Cookies from "js-cookie";

const ModalAddTourist = ({ active, setActive }) => {
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
}
//console.log(selectedOptions);
  
const [name, setName] = useState("");
const [age, setAge] = useState("");

const postData = () => 
{
    console.log(Cookies.get('email'), name,selectedOptions,age);
    AddTourist(Cookies.get('email'), name,selectedOptions,age);
    setActive(false);
    window.location.reload();
}

  return (
    <div
      className={active ? "profileModal active" : "profileModal"}
      onClick={() => setActive(false)}>
      <div
        className="profileModalContent"
        onClick={(e) => e.stopPropagation()}
      >
      <div className="modalChild">
        <div className="headerText">
          <span>Добавление нового туриста</span>
        </div>

        <table>
          <tr>
            <td className="modalTable">Имя</td>
            <td>
              <input type="text" placeholder="Введите имя" required 
              onChange={(e) => setName(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td className="modalTable">Возраст</td>
            <td>
              <input type="number" placeholder="Введите возраст" required
              onChange={(e) => setAge(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td className="modalTable">Интересы</td>
            <td>
              <select multiple={true} onChange={handleSelectChange} required>
                <option /*selected="true"*/ disabled="disabled">
                  Интересы
                </option>
                {interests ? (
                  interests.map((interest) => (
                    <option
                      key={interest.id} value={interest.id}
                    >
                      {interest.name}
                    </option>
                  ))
                ) : (
                  <option></option>
                )}
              </select>
            </td>
          </tr>
        </table>
        <div className="modalButtons">
          <button className="cancelButton" onClick={() => setActive(false)}>
            Отменить
          </button>
          <button className="saveButton" onClick={postData}>Сохранить</button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ModalAddTourist;
