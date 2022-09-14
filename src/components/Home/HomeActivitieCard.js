
import { HOST } from "../../config/config";

const HomeActivitieCard = (activityInfo) => {
    console.log(activityInfo)
    const imageUrl = activityInfo.activityInfo.activityPicture.data[0].attributes.url;
     const title = activityInfo.activityInfo.activityName;


    return (
        <>
            <div className="activity-image">

                <img src={HOST.concat(imageUrl)}  className='fade-in' alt="" />


            </div>
            <div className="activity-info animate__fadeIn">
                <h3 className="animate__animated animate__bounceIn">{title}</h3>
                <h1 className="animate__animated animate__bounce">ЕНЕРГИЯ ЕООД</h1>
                <h2 className="animate__animated animate__bounceIn">КАЗАНЛЪК</h2>
                <button>НАУЧИ ПОВЕЧЕ</button>
            </div>
        </>
    )
}

export default HomeActivitieCard;