import "./Profile.css";
import { useState } from "react";
import { useEffect } from "react";
import GetData from "../../functions/Get/GetData.jsx";
//import AddTourist from "../../functions/PostAddTourist";
import PatchTouristInfo from "../../functions/Patch/PatchTouristInfo";

const ModalEditTourist = ({ active, setActive, touristId, touristInterests, name, age}) => {
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
  
var touristInterestsIds=[];
touristInterests.map((interest)=>touristInterestsIds.push(interest.id));
//console.log(touristInterestsIds);


  const [selectedOptions, setSelectedOptions] = useState([]);
  var interestsChanged=false;
  function handleSelectChange(event) {
    interestsChanged=true;
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedOptions(selectedValues);
}

function resetInterests(){
  const selectedValues = [];
  for (let i = 0; i < touristInterests.length; i++) {
    selectedValues.push(touristInterests[i].id);
}
console.log(selectedValues);
setSelectedOptions(selectedValues);
}
//console.log(selectedOptions);
  
const doThings=()=>{
  //console.log("A",age,"N",name);
  interestsChanged?
  age=age:resetInterests();
  PatchTouristInfo(age,name,selectedOptions,touristId)
  setActive(false);
  //window.location.reload();
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
          <span>Изменение информации о туристе</span>
        </div>

        <table>
          <tr>
            <td className="modalTable">Имя</td>
            <td>
              <input type="text" placeholder="Введите имя" required defaultValue={name}
              onChange={(e) => name=e.target.value}/>
            </td>
          </tr>
          <tr>
            <td className="modalTable">Возраст</td>
            <td>
              <input type="number" placeholder="Введите возраст" required defaultValue={age}
              onChange={(e) => age=e.target.value}/>
            </td>
          </tr>
          <tr>
            <td className="modalTable">Интересы</td>
            <td>
              <select multiple={true} onChange={handleSelectChange} required defaultValue={interests} >
                <option /*selected="true"*/ disabled="disabled">
                  Интересы
                </option>
                {interests ? (
                  interests.map((interest) => (
                    
                    <option
                      key={interest.id} value={interest.id} 
                      selected={touristInterestsIds?
                        ((touristInterestsIds.indexOf(interest.id)>-1)? 'selected':''):""}
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
          <button className="saveButton" onClick={doThings}>Сохранить</button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ModalEditTourist;
