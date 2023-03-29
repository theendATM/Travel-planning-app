import "./Profile.css";
import ProfileModal from "./ProfileModal";
import ModalPI from "./ModalPI";
import ModalEditTourist from "./ModalEditTourist";
import ModalAddTourist from "./ModalAddTourist";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GetDataWithParams from "../../functions/Get/GetDataWithParams";
import Cookies from "js-cookie";
import PostDeleteToutist from "../../functions/Post/PostDeleteToutist";
import ModalPN from "./ModalPN";

const Profile = () => {
  const navigate = useNavigate();

  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);
  const [modalActive4, setModalActive4] = useState(false);
  const [modalActive6, setModalActive6] = useState(false);

  const [userName, setUserName] = useState();
  const getUserName = async () => {
    try {
      const result = await GetDataWithParams("profile", Cookies.get("email"));
      console.log(Cookies.get("email"));
      setUserName(result);
    } catch {}
  };

  useEffect(() => {
    getUserName();
  }, []);
  console.log(userName);

  const DeleteTourist = (id) => {
    PostDeleteToutist(id);
    window.location.reload();
  };

  const [touristName, setTouristName] = useState("");
  const [touristAge, setTouristAge] = useState("");
  const [touristId, setTouristId] = useState("");
  const [touristInterests, setTouristInterests] = useState([]);

  const EditTourist=(name,age,interests,id)=>{
    setTouristAge(age);
    setTouristId(id);
    setTouristName(name);
    setTouristInterests(interests);
    console.log(touristAge,touristId,touristName, touristInterests);
    setModalActive3(true);
    
  }
  

  return (
    <div className="profile">
      <div className="profileBlock">
        <div className="headerBlock">
          <span>Персональная информация</span>
        </div>
        <table>
          <tr>
            <td>Имя</td>
            <td>{userName ? userName.name : ""}</td>
            <td className="changeButton" onClick={() => setModalActive1(true)}>
              Изменить
            </td>
          </tr>
          <tr>
            <td>Номер телефона</td>
            <td>{userName ? userName.phone : ""}</td>
            <td className="changeButton" onClick={() => setModalActive2(true)}>
              Изменить
            </td>
          </tr>
          <tr>
            <td className="noPadding">E-mail</td>
            <td className="noPadding">{userName ? userName.email : ""}</td>
          </tr>
        </table>
      </div>

      <div className="profileBlock">
        <div className="headerBlock">
          <span>Туристы</span>
          <span className="changeButton" onClick={() => setModalActive6(true)}>
            Добавить туриста
          </span>
        </div>
        <table>
          {userName ? (
            userName.tourists.map((tourist) => (
              <tr>
                <td>{tourist.name}</td>
                <td>Возраст: {tourist.age}</td>
                <td
                  className="changeButton"
                  onClick={() => EditTourist(tourist.name,tourist.age,tourist.interests, tourist.id)}
                >
                  Изменить
                </td>
                <td
                  key={tourist.id}
                  className="deleteButton"
                  onClick={() => DeleteTourist(tourist.id)}
                >
                  Удалить
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </table>
      </div>

      <div className="profileBlock">
        <div className="headerBlock">
          <span>Мои планы</span>
          <span
            className="changeButton"
            onClick={() => navigate("/planCreation/1")}
          >
            Создать план
          </span>
        </div>
        <table>
          {userName ? (
            userName.plans.map((plan) => (
              <tr>
                <td>{plan.name}</td>
                <td>Город: {plan.city}</td>
                <td>
                  Даты: {plan.arrivalTime}-{plan.departureTime}
                </td>
                <td className="deleteButton">Удалить</td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </table>
      </div>
      <ModalPI
        active={modalActive1}
        setActive={setModalActive1}
        name={userName ? userName.name : ""}
        email={userName ? userName.email : ""}
        phone={userName ? userName.phone : ""}
      ></ModalPI>

      <ModalPN
        active={modalActive2}
        setActive={setModalActive2}
        name={userName ? userName.name : ""}
        email={userName ? userName.email : ""}
        phone={userName ? userName.phone : ""}
      ></ModalPN>
    
      <ModalEditTourist
        active={modalActive3}
        setActive={setModalActive3}
        name={touristName}
        age={touristAge}
        touristId={touristId}
        touristInterests={touristInterests}
      ></ModalEditTourist>

      <ModalAddTourist
        active={modalActive6}
        setActive={setModalActive6}
      ></ModalAddTourist>
    </div>
  );
};

export default Profile;
