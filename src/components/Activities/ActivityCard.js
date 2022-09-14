import { HOST } from "../../config/config";

const ActivityCard = (activityInfo) => {

   
    console.log(activityInfo.activityInfo.attributes.activityPicture.data[0].attributes.url)
     const name = activityInfo.activityInfo.attributes.activityName;
    const imageUrl= activityInfo.activityInfo.attributes.activityPicture.data[0].attributes.url;

    return (
        <li className="activity-box">
        <div className="activity-image">
          <img src={ HOST.concat(imageUrl)} alt="" />
          <div className="overlay">
            <div className="text">{name}</div>
          </div>
        </div>
      </li>
    )
}

export default ActivityCard;