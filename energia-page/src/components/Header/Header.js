import './Header.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (

    <header className="header-on-scroll">
      <div className="header-left logo-on-scroll">
        <Link to="/" ><img src={logo} alt="ЕнергияЕООД" /></Link>
      </div>
      <div className="header-right">
        <ul>
          <li><Link to="/" className="link-active" >НАЧАЛО</Link></li>
          <li><Link to="/about" className="link-inactive" >ЗА НАС</Link></li>
          <li><Link to="/activities" className="link-inactive" >ДЕЙНОСТИ</Link></li>
          <li><Link to="/contacts" className="link-inactive" >КОНТАКТИ</Link></li>
        </ul>
      </div>
    </header>

  )
}

export default Header;