import "./FrontView.css";
import FrontViewImage from "../../assets/Homepage/FrontViewImage.svg"

function FrontView(){
    return(
        <div className="FrontViewContainer">
            <div className="FrontViewTextContainer">
                <div className= "FrontViewTitleContainer">
                <h1 className="FrontViewTitleOne">Lecteurs</h1>
                <h1 className="FrontViewTitleTwo">Avides</h1>
                </div>
                <p className="FrontViewSubTitle">Join us and enjoy the best book club experience</p>

                
            </div>

            <div className="FrontViewImageContainer">
                <img src={FrontViewImage} alt="FrontViewImage" className="FrontViewImage" />
            </div>


            {/* <div className="FrontViewOverlay">
                    <p className="FrontViewOverlaySubTitle">Welcome to our reading club! Make yourself at home, dive into our books, and share your thoughts. We’re excited to have you with us on this literary journey!</p>
            </div> */}
        </div>
    )
}
export default FrontView;