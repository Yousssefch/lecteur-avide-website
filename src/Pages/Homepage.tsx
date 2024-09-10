import Navbar from "../Components/Global/Navbar";
import ImageCoverWithText from "../Components/Global/ImageCoverWithText";
import ImageCoverWithText2 from "../Components/ImageCoverWithText2";
import TextButton from "../Components/HomePage/TextButton";
import Footer from "../Components/Global/Footer";
import Image1 from '../assets/Homepage/Image1.jpeg';
import LatestEvents from "../Components/HomePage/LatestEvents";
import BookCover from "../Components/BookCover";
function Homepage() {
  return (
    <div>
      <Navbar />
      <ImageCoverWithText Image={Image1} Title="Read with passion!" Subtitile="You’re favourite Reader’s Club is right here at the University of Ottawa" />
      <LatestEvents />
      <ImageCoverWithText2 />
      <TextButton />
      <BookCover />
      <Footer />
    </div>
  );
}
export default Homepage;