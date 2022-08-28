import './Home.css';
import picture1 from '../../assets/1.jpg';
import { getAllHomeData } from '../service/service';
import { useState } from 'react';

const Home = () => {

  const [data, setData] = useState([]);
 getAllHomeData().then(
   result => {
  //   setData(result);
     console.log('result -> ', result);
   }
 )

    return (
      
        <section className="home">
        <article className="activity">

          <div className="activity-image">
            <img src={picture1} alt="" />
          </div>
          <div className="activity-info animate__fadeIn">
            <h3 className="animate__animated animate__bounceIn">ЕЛ МОНТАЖ И ИЗКОПНИ
              РАБОТИ</h3>
            <h1 className="animate__animated animate__bounce">ЕНЕРГИЯ ЕООД</h1>
            <h2 className="animate__animated animate__bounceIn">КАЗАНЛЪК</h2>
            <button>НАУЧИ ПОВЕЧЕ</button>
          </div>
        </article>
      </section>


    )
}

export default Home;