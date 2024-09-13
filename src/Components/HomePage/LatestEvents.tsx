import { getFetchDatabase } from "../../Utils/Utils"
import "./LatestEvent.css"
import Event from "../EventsComponent/Event"
import NoEvents from "../EventsComponent/NoEvents";

function LatestEvents() {
    let basename = import.meta.env.BASE_URL;
    const events = getFetchDatabase("LatestEvents").slice(1, 4);
    while(events == undefined){
        return (
            <div>
            </div>
        )
    }
    return (
        <div className="LatestEventContainer">
            <h1 className="OurLatestEvent">Our Latest Events:</h1>
            <div className="LatestEventsContainer">
                {
                    events && events.length > 0 ? (
                    events.map((event, index) => {
                   return <Event   eventTitle={event["Title"]} shortDescription={event["Description"]} imageSrc={event["ImagePath"]} eventLink={event["Link"]}  key={index}/>
                })
            ) : (
                <>
                    <div className="NoPastEvents">
                        <NoEvents />
                    </div>
                </>
            )
        }
            
            </div>
            <div className="MoreEventsButtonContainer">
            <button onClick={() => location.href = basename +"#/Events"} type="button" className="btn btn-dark MoreEventsButton">More Events</button>
            </div>
        </div>
    )

}

export default LatestEvents