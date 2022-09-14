import './Home.css';
import { getAllHomeData } from '../service/service';
import { useEffect, useState, useRef } from 'react';
import { HOST } from "../../config/config";
import { Link } from 'react-router-dom';

import HomeActivitieCard from './HomeActivitieCard';

// const Home = () => {

//   const [activities, setActivities] = useState({});

//   useEffect(() => {
//     let activitiesData;
//     getAllHomeData().then(
//       result => {
//         console.log(result)
//         result.data.map(x => {
//           x.attributes.visibility = 'none';
//         })
//         setActivities(result);
//       }
//     )
//   }, []);

//   useEffect(() => {
//     if (activities.hasOwnProperty('data')) {
//       const slideShowSetinterval = setInterval(() => {
//         showSlides();
//       }, 2000);
//       setSlideShow(slideShowSetinterval);
//     }
//   }, [activities])


//   let i = 0;
//   function showSlides() {
//     for (let j = 0; j < activities.data.length - 1; j++) {
//       activities.data[i].attributes.visibility = 'none';
//     }

//     activities.data[i].attributes.visibility = "block";
//     setActivities({ ...activities.data[i].attributes.visibility = "block" })

//     console.log(`for image ${i} the visibility is changed to block`)
//     if (i == activities.data.length - 1) {
//       i = 0;
//     } else {
//       i++;
//     }
//   }
//   return (

//     <section className="home">
//       <article className="activity">

//         {activities.data
//           ? activities.data.map(x => <HomeActivitieCard key={x.id} activityInfo={x.attributes} />)
//           : ""}

//       </article>
//     </section>
//   )
// }

const Home = () => {

  const [data, setData] = useState({});
  const [dataToPrint, setDataToPrint] = useState({});

  useEffect(() => {

    getAllHomeData().then(
      result => {
        setData(result.data);
        
        setDataToPrint({
          title: result.data[0].attributes.activityName,
          imageUrl: result.data[0].attributes.activityPicture.data[0].attributes.url
        });
        console.log("get results -> ", result)
      }
    )
  }, []);

  useEffect(() => {

    let i = 0;
    const sliderId = setInterval(() => {
      setDataToPrint({
        title: data[i].attributes.activityName,
        imageUrl: data[i].attributes.activityPicture.data[0].attributes.url
      });
    
      console.log(data[i]);
         i++;
      if (i == data.length) {
        i = 0;
      }
      console.log('test');
    }, 3000)

    return () => clearInterval(sliderId);
  }, [data])





  return (

    <section className="home">
      <article className="activity">

        <div  className=" activity-image">
        
            <img src={HOST.concat(dataToPrint.imageUrl)} alt="" />
        
          
        </div>
        <div className="activity-info animate__fadeIn">
          <h3 className="animate__animated animate__bounceIn">{dataToPrint.title}</h3>
          <h1 className="animate__animated animate__bounce">ЕНЕРГИЯ ЕООД</h1>
          <h2 className="animate__animated animate__bounceIn">КАЗАНЛЪК</h2>
          <Link to="/activities" className="moreBtn">НАУЧИ ПОВЕЧЕ </Link>
        </div>
      </article>
    </section>


  )
}


export default Home;