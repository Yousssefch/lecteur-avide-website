import "./Event.css";
import Image1 from '../assets/EventPage/Image1.png';


;
function Event({eventTitle, shortDescription, imageSrc, eventLink}: {eventTitle: string, shortDescription: string, imageSrc: string, eventLink: string}) {
  return (
    <div className="EventContainer">

        <div className="ImageContainerr">
          <img src={imageSrc}  className="EventImage img-fluid" />
        </div>


        <div className="EventTextContainer">
        <h1 className="EventTitle">{eventTitle}</h1>
        <div className="EventDescriptionContainer">
            <p className="EventDescriptionText">{shortDescription}</p>
        </div>
        </div> 


        <a href={eventLink} className="EventLink">
        <div  className="HoverBox"></div>
        </a>
    </div>
    
  );
}

export default Event;