import Navbar from "../Components/Global/Navbar";
import ImageCoverWithText2 from "../Components/ImageCoverWithText2";
import TextButton from "../Components/HomePage/TextButton";
import Footer from "../Components/Global/Footer";
import LatestEvents from "../Components/HomePage/LatestEvents";
import BookCover from "../Components/BookCover";
import FrontView from "../Components/HomePage/FrontView";
import JoinUs from "../Components/HomePage/JoinUs";
import PresentationVideo from "../Components/HomePage/PresentationVideo";
function Homepage() {
  return (
    <div>
      <Navbar />
      {/* <ImageCoverWithText Image={Image1} Title="Read with passion!" Subtitile="You’re favourite Reader’s Club is right here at the University of Ottawa" /> */}
      <FrontView />
      <LatestEvents />
      <ImageCoverWithText2 />
      <TextButton />
      <BookCover />
      <JoinUs />
      <PresentationVideo />
      <Footer />
    </div>
  );
}
export default Homepage;