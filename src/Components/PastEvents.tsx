import Event from "./EventsComponent/Event"
import { getFetchDatabase } from "../Utils/Utils";
import NoEvents from "./EventsComponent/NoEvents";
import "./PastEvents.css";
function PastEvents(){
    const temp = getFetchDatabase("PastEvents"); //Get Past Events List from the database
    const events = temp.slice(1, temp.length);
    return (
        <div className="PastEvents">
            <h1 className="PastEventsTitle">Past Events: </h1>
            <p className="PastEventsSubtitle">"We have had some amazing events in the past. Check them out!"</p>
            {
                events && events.length > 0 ? (
                    <div className="PastEventsContainer">
                        {
                            events.map((event, index) => (
                                <Event 
                                    eventTitle={event["Title"]} 
                                    shortDescription={event["Description"]} 
                                    imageSrc={event["ImagePath"]}  
                                    key={index}
                                    eventLink={event["Link"]}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <>
                    <div className="NoPastEvents">
                        <NoEvents />
                    </div>
                    </>
                )
            }
        </div>
    )
}
export default PastEvents;