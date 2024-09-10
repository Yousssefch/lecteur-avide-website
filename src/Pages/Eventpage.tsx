
import ImageCoverWithText from "../Components/Global/ImageCoverWithText";
import Image1 from '../assets/EventPage/Image1.png';
import Navbar from "../Components/Global/Navbar";
import Footer from "../Components/Global/Footer";
import UpcomingEvents from "../Components/UpcomingEvents";
import PastEvents from "../Components/PastEvents";



function Eventpage() {

    return (
        // Data is fetched and displayed
        <div>
            <Navbar />
            <ImageCoverWithText Image={Image1} Title="Events" Subtitile="Each event makes our bond infinitely closer !" />
            <UpcomingEvents />
            <PastEvents />
            <Footer />

        </div>
    )
}
export default Eventpage;