import './Header.css';
import logo from './assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import React, { useState} from 'react';

const Header = () => {

  const [headerClass, setHeaderClass] = useState('header-on-top');
  const [logoClass, setLogoClass] = useState('header-left logo-on-top');
  const location = useLocation().pathname;

  window.addEventListener("scroll", () => {
    if (typeof window != 'undefined') {
      if (window.scrollY > 100) {
        setHeaderClass('header-on-scroll');
        setLogoClass('header-left logo-on-scroll');
        console.log(location)

      } else {
        setHeaderClass('header-on-top');
        setLogoClass('header-left logo-on-top');
      }

    }

  }

  );


  


  return (

    <header className={headerClass} >

      <div className={logoClass}>
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