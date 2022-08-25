import './App.css';
import { Routes, Route } from 'react-router-dom';


import activityPicture from './assets/portfolio-img-1.JPG';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
 
      <section className="activities animate__fadeIn">

        <h1 className="title animate__animated animate__bounceIn">Дейности</h1>

        <ul className="container">

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>

          <li className="activity-box">
            <div className="activity-image">
              <img src={activityPicture} alt="" />
              <div className="overlay">
                <div className="text">Изкопни работи</div>
              </div>
            </div>
          </li>



        </ul>
      </section>

      <section className="contacts animate__fadeIn">

        <h1 className="title animate__animated animate__bounceIn">Контакти</h1>
        <address>
          <ul>
            <li className="animate__animated animate__bounceIn">
              <a className="icon-container" href="">
                <div className="icon">
                  <img src="./callus.png" alt="" />
                </div>
              </a>
              <span>0887/ 353 423</span> <b>&nbsp;или&nbsp;</b> <span>0431/ 62 800</span>

            </li>

            <li className="animate__animated animate__bounceIn">
              <a className="icon-container" href="">
                <div className="icon">
                  <img src="./emailus.png" alt="" />
                </div>
                <span>office@energyeood.bg</span>
              </a>
            </li>
          </ul>
        </address>

        <form action="">
          <div className="input-container">
            <input className="name" type="text" name="name" placeholder="Име" />
            <input className="email" type="text" name="email" placeholder="E-mail" />
            <input className="theme" type="text" name="theme" placeholder="Тема" />
          </div>
          <textarea className="message" name="message" id="" cols="30" rows="10" placeholder="Съобщение"></textarea>
          <input className="submit-btn" type="submit" value="Изпрати запитване" />

        </form>
      </section>

      <footer>
        <address className="animate__fadeIn" >
          <p className="animate__animated animate__bounceIn" >Copyright © www.energyeood.bg - Енергия ЕООД, гр.Казанлък - 2017</p>
        </address>
        <a href="">Изработка и дизайн от www.StudioKazanlak.com</a>
      </footer>

    </div>
  );
}

export default App;
