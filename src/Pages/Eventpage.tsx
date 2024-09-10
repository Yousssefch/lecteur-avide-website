
import ImageCoverWithText from "../Components/Global/ImageCoverWithText";
import Image1 from '../assets/EventPage/Image1.png';
import Navbar from "../Components/Global/Navbar";
import Event from "../Components/EventsComponent/Event";
import Footer from "../Components/Global/Footer";
import { getLatestEvents, getEventsImages } from "../Utils/Utils";
import { useEffect, useState } from "react";
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