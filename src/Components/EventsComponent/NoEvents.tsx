import "./NoEvents.css"
import GhostIcon from "../../assets/Icons/GhostIcon.svg"

function NoEvents(){
    return(
        <div className="NoEventsContainer">
            <img src={GhostIcon} className="GhostIconImage" />
            <h1 className="NoEventsText">There is nothing here for now...</h1>

        </div>
    )
}
export default NoEvents;