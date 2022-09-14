import { getAllActivities } from '../service/service';
import './Activities.css';
import { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard';


const Activities = () => {


  const [activities, setActivities] = useState({});


  useEffect(() => {
    getAllActivities().then(
      result => {

        setActivities(result);

      }
    )
  }, [])

  return (

    <section className="activities animate__fadeIn">

      <h1 className="title animate__animated animate__bounceIn">Дейности</h1>

      <ul className="container">

        {
          activities.data
            ? activities.data.map(x => <ActivityCard key={x.id} activityInfo={x} />)
            : <p>No Info</p>
        }


      </ul>
    </section>


  )
}

export default Activities;
