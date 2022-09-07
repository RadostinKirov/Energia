import './Home.css';
import { getAllHomeData } from '../service/service';
import { useEffect, useState } from 'react';
import { HOST } from '../../config/config';

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
          <button>НАУЧИ ПОВЕЧЕ</button>
        </div>
      </article>
    </section>


  )
}

export default Home;