import './Header.css';
import logo from './assets/logo.png';

const Header = () => {
    
    return (

        <header className="header-on-scroll">
        <div className="header-left logo-on-scroll">
          <a href=""><img src={logo} alt="ЕнергияЕООД" /></a>
        </div>
        <div className="header-right">
          <ul>
            <li><a className="link-active" href="">НАЧАЛО</a></li>
            <li><a className="link-inactive" href="">ЗА НАС</a></li>
            <li><a className="link-inactive" href="">ДЕЙНОСТИ</a></li>
            <li><a className="link-inactive" href="">КОНТАКТИ</a></li>
          </ul>
        </div>
      </header>

    )
}

export default Header;