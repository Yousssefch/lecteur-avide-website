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
                        <Card.Title className="CardTitle">Creating a Safe Space for Minorities</Card.Title>
                        <Card.Text className="CardText">
                        our vision is to cultivate a welcoming and inclusive environment where minorities, particularly French-speaking students, can freely express themselves.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="Chapter2Card">

                    <div className="CardImageContainer">
                    <Card.Img variant="top"  src={CommunityImage} className="CardImage" />
                    </div>
                    
                    <Card.Body>
                        <Card.Title className="CardTitle">Promoting Local Talent Through</Card.Title>
                        <Card.Text className="CardText">
                            Our reading club at the University of Ottawa is dedicated to showcasing the vibrant literary scene of the Ottawa-Gatineau region. 
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="Chapter2Card">

                    <div className="CardImageContainer">
                    <Card.Img variant="top"  src={CommunicationImage} className="CardImage" />
                    </div>
                    
                    <Card.Body>
                        <Card.Title className="CardTitle">Literature Accessible for the French-Speaking Minorities</Card.Title>
                        <Card.Text className="CardText">
                        French-speaking minorities can access a wide range of literary resources, fostering cultural inclusion and academic growth.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    );
}
export default Chapter2;