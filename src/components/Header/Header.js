import './Header.css';
import logo from './assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {

  const [headerClass, setHeaderClass] = useState('header-on-top');
  const [logoClass, setLogoClass] = useState('header-left logo-on-top');
  const [activeTab, setActiveTab] = useState('home');
const location = useLocation();

  window.addEventListener("scroll", () => {
    if (typeof window != 'undefined') {
      if (window.scrollY > 50) {
        setHeaderClass('header-on-scroll');
        setLogoClass('header-left logo-on-scroll');

      } else {
        setHeaderClass('header-on-top');
        setLogoClass('header-left logo-on-top');
      }

    }

  }

  );


  const setActive = (e) => {
    
    console.log(e);
    switch (e.target.pathname) {
      case "/": setActiveTab('home'); break;
      case "/about": setActiveTab('about'); break;
      case "/activities": setActiveTab('activities'); break;
      case "/contacts": setActiveTab('contacts'); break;
      default: setActiveTab('');
    }
    console.log(activeTab)
  }


  return (

    <header className={headerClass} >

      <div className={logoClass}>
        <Link to="/" onClick={setActive} ><img src={logo} alt="ЕнергияЕООД" /></Link>
      </div>
      <div className="header-right">
        <ul>
          <li><Link to="/" onClick={setActive} className={activeTab === 'home' ? 'link-active' : 'link-inactive'} >НАЧАЛО</Link></li>
          <li><Link to="/about" onClick={setActive} className={activeTab === 'about' ? 'link-active' : 'link-inactive'} >ЗА НАС</Link></li>
          <li><Link to="/activities" onClick={setActive} className={activeTab === 'activities' ? 'link-active' : 'link-inactive'} >ДЕЙНОСТИ</Link></li>
          <li><Link to="/contacts" onClick={setActive} className={activeTab === 'contacts' ? 'link-active' : 'link-inactive'} >КОНТАКТИ</Link></li>
        </ul>
      </div>
    </header>

  )
}

export default Header;