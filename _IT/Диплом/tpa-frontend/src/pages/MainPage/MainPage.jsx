import Header from "../../components/header/Header";
import './MainPage.css';
const MainPage = () => {

    return(
      <div className="mainPage">
        <Header/>
        <div className="mainPageDesc">
          <span>Планируйте отдых вместе с нами! </span>
          <div className="mainPageAdvantages">
            <span>Наши преимущества:</span>
            <ul>
              <li>создание индивидаульного плана поездки</li>
              <li>готовые планы </li>
              <li>большой выбор развлечений</li>
              <li>эффективное распределение времени</li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default MainPage;