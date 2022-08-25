import './Header.css';

const Header = () => {
    
    return (

        <header className="header-on-scroll">
        <div className="header-left logo-on-scroll">
          <a href=""><img src="./assets/logo.png" alt="ЕнергияЕООД" /></a>
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