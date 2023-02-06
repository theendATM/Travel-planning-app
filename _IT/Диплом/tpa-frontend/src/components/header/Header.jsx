import { useNavigate} from 'react-router-dom'
import logo from '../img/logo.svg'
import choice from '../img/choice.svg'
import './Header.css';

const Header=()=>{
    const navigate = useNavigate();


    return(
        <div className='header'>
            <div className='headerItems'>
                <div className='headerButtons'>
                    <img src={logo} alt=''></img>
                    <span onClick={()=>navigate('/')}>Главная</span>
                    <span onClick={()=>navigate('/profile')}>Профиль</span>
                    <span>Создание плана</span>
                    <span>Готовые планы</span>
                    <span>Развлечения</span>
                </div>
                <div className='headerProfile'>
                    <span className='userNameHeader'>Имя пользователя</span>
                    <img src={choice} alt=''/>
                </div>
            </div>
            
            <div className='headerLine'>

            </div>
        </div>
    )
}

export default Header;