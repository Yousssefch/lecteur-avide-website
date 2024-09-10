import "./UpcomingEvents.css";
import { getFetchDatabase } from "../Utils/Utils";
import Event from "./EventsComponent/Event";
import NoEvents from "./EventsComponent/NoEvents";

function UpcomingEvents() {
    const temp = getFetchDatabase("UpcomingEvents");
    const events = temp.slice(1, temp.length);

    return (
        <div className="UpcomingEvents">
            <h1 className="UpcomingEventsTitle">Upcoming Events: </h1>
            {
                events && events.length > 0 ? (
                    <div className="UpcomingEventsContainer">
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
                    <div className="NoUpcomingEvents">
                        <NoEvents />
                    </div>
                    </>
                )
            }
        </div>
    );
}

export default UpcomingEvents;
