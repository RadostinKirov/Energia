import './About.css';
import imagesArr from './assets/udostoverenie/images.js';
import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';
import { useEffect, useState } from 'react';

const About = () => {

  const [image, setImage] = useState(imagesArr[0]);
  const [imageIndex, setImageIndex] = useState(1);
  console.log(imagesArr);

  useEffect(() => {
    // let i = 0;
    // const timerId = setInterval(() => {
    //   setImage(imagesArr[i]);
    //   i++;
    //   if (i == 5) {
    //     i = 0;
    //   }
    // }, 2000)

    // return () => { clearInterval(timerId) };
  }, [] 
   );

   const onLeftClick = () => {

   }

   const onRightClick = (e) => {
     e.preventDefault();

     if(imageIndex < imagesArr.length - 1){
      setImageIndex(imageIndex + 1);
      setImage(imagesArr[imageIndex]);
    }else {
      setImageIndex(0);
      setImage(imagesArr[imageIndex]);
    }
   }

  return (

    <section className="about-us">
      <h1 className="title animate__animated animate__bounceIn">За нас</h1>
      <div className="container">
        <main className="activity-info animate__fadeInLeft">
          <p>&emsp;"Енергия" ЕООД е създадена през 2001 г. Основна дейност е изграждане на силови разпределителни
            мрежи
            и трафопостове, изкопни работи, транспорт и специализирана техника. В процеса на работа сме
            наблегнали на пълно техническо оборудване и превличане на качествени специалисти за самостоятелно
            обслужване на всички наши клиенти.</p>

          <p>&emsp;ГРУПИ И КАТЕГОРИИ СТРОЕЖИ, ЗА КОИТО СМЕ ВПИСАНИ</p>

          <p>&emsp; I ПЪРВА ГРУПА: строежи от високото строителство, прилежащата му инфраструктура, електронни
          </p>
          <p> съобщителни мрежи и съоръжения:</p>
          <p> 1.3 строежи от трета до пета категория съгласно чл. 5, ал. 4 от ПРВВЦПРС; </p>

          <p>&emsp; II ВТОРА ГРУПА: строежи от транспортната инфраструктура: </p>
          <p> 2.3 строежи от трета и четвърта категория съгласно чл. 5, ал. 4 от ПРВВЦПРС;</p>

          <p>&emsp; III ТРЕТА ГРУПА: строежи от енергийната инфраструктура:</p>
          <p> 3.2 строежи от втора и трета категория съгласно чл. 5, ал. 4 от ПРВВЦПРС;</p>

          <p>&emsp; IV ЧЕТВЪРТА ГРУПА: строежи от благоустройствената инфраструктура, хидротехническото
            строителство и
            опазването на околната среда:</p>
          <p> 4.3 строежи от трета и четвърта категория съгласно чл. 5, ал. 4 от ПРВВЦПРС.</p>

          <p>&emsp; V ПЕТА ГРУПА: отделни видове строителни и монтажни работи:</p>
          <p> 43.11 Събаряне и разрушаване; 43.12 Земни работи; 43.13 Сондиране и пробиване;</p>
          <p> 41.20 Строителство на жилищни и нежилищни сгради;</p>
          <p> 42.12 Строителство на подземни и наземни релсови пътища;</p>
          <p> 42.13 Строителство на мостове и тунели;</p>
          <p> 42.22 Строителство на преносни и разпределителни електрически и далекосъобщителни мрежи;</p>
          <p> 42.99 Строителство на други съоръжения, некласифицирани другаде;</p>
          <p> 43.91 Покривни работи;</p>
          <p> 42.11 Строителство на автомагистрали, пътища и самолетни писти;</p>
          <p> 42.21 Строителство на преносни и разпределителни тръбопроводи;</p>
          <p> 42.91 Строителство на хидротехнически съоръжения;</p>
          <p> 43.99 Други специализирани строителни дейности, некласифицирани другаде;</p>
          <p> 43.21 Изграждане на електрически инсталации;</p>
          <p> 43.22 Изграждане на водопроводни, канализационни, отоплителни и климатични инсталации;</p>
          <p> 43.29 Изграждане на други инсталации;</p>
          <p> 80.20 Дейности в областта на технически системи за сигурност;</p>
          <p> 43.31 Полагане на мазилки;</p>
          <p> 43.32 Монтаж на дограма и дърводелски работи;</p>
          <p> 43.33 Полагане на облицовки и настилки;</p>
          <p> 43.34 Боядисване и стъклопоставяне;</p>
          <p> 43.39 Други довършителни строителни дейности.</p>
        </main>
        <aside className="activity-info animate__fadeInRight">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.2918401721954!2d25.40224301496938!3d42.612766227098504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a851550e2270c1%3A0x705852d28b3490d9!2z0JXQvdC10YDQs9C40Y8g0JXQntCe0JQsINCz0YAuINCa0LDQt9Cw0L3Qu9GK0Lo!5e0!3m2!1sbg!2sbg!4v1661190336407!5m2!1sbg!2sbg"
              width="600" height="450" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="udostoverenie">
            <img src={image} alt="" />
            <a onClick={onLeftClick} className="arrow left-btn" href="">
              <img src={leftArrow} alt="" />
            </a>

            <a onClick={onRightClick} className="arrow right-btn" href="">
              <img src={rightArrow} alt="" />
            </a>

          </div>
        </aside>
      </div>
    </section>


  )
}

export default About;