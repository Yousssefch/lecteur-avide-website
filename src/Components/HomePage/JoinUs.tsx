import "./JoinUs.css";
import JoinUsBackground from "../../assets/Homepage/JoinUsBg.svg";

export default function JoinUs() {
    return(
        <div className="JoinUsContainer">
            <div className="JoinUsTextContainer">
                <h1 className="JoinUsTitle">Join Us</h1>
                <h2 className="JoinUsSubtitle">Become a member of the Avid Readers Club</h2>
            </div>

            {/* Backgtround */}
            <img src={JoinUsBackground} alt="Join Us Background" className="JoinUsBackground" />
            <div className="JoinUsBackgroundOverlay"></div>

            {/* Button*/}
            <div className="JoinUsButtonContainer">
                <button className="JoinUsButton">Join Now</button>
            </div>
            
        </div>
    )
}
