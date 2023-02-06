import Profile from '../../components/profile/Profile';
import Header from "../../components/header/Header";
import './ProfilePage.css';
const ProfilePage = () => {

    return(
      <div className="mainPage">
        <Header/>
        <Profile/>
      </div>
    )
}
export default ProfilePage;