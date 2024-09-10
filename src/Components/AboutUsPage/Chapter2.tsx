import "./Chapter2.css";
import { Card } from "react-bootstrap";
import SharingImage from "../../assets/AboutUsPage/SharingImage.svg";
import CommunityImage from "../../assets/AboutUsPage/CommunityImage.svg";
import CommunicationImage from "../../assets/AboutUsPage/CommunicationImage.svg";

function Chapter2(){
    return (
        <div className="Chapter2ContainerOne">

            <h1 className="Chapter2Title">Chapter 2: Our Mission</h1>
            <div className="Chapter2Cards">
                <Card style={{ width: '18rem' }} className="Chapter2Card">

                    <div className="CardImageContainer">
                    <Card.Img variant="top"  src={SharingImage} className="CardImage" />
                    </div>

                    <Card.Body>
                        <Card.Title className="CardTitle">Sharing</Card.Title>
                        <Card.Text className="CardText">
                            We believe that books are meant to be shared. Whether you're discovering new stories or passing along old favorites, we’re here to make the joy of reading a shared experience.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="Chapter2Card">

                    <div className="CardImageContainer">
                    <Card.Img variant="top"  src={CommunityImage} className="CardImage" />
                    </div>
                    
                    <Card.Body>
                        <Card.Title className="CardTitle">Build a community</Card.Title>
                        <Card.Text className="CardText">
                            At our university book club, we believe that books are more than just words on a page—they're the foundation for building a strong, connected community.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="Chapter2Card">

                    <div className="CardImageContainer">
                    <Card.Img variant="top"  src={CommunicationImage} className="CardImage" />
                    </div>
                    
                    <Card.Body>
                        <Card.Title className="CardTitle">Communication</Card.Title>
                        <Card.Text className="CardText">
                        we see every book as an opportunity to spark meaningful conversations and build lasting friendships.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    );
}
export default Chapter2;