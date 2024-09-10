import Navbar from "../Components/Global/Navbar";
import BooksSlider from "../Components/BooksSlider";
import ImageCoverWithText from "../Components/Global/ImageCoverWithText";
import BooksPageImage from "../assets/BooksPage/BooksPageImage.jpg"
import Footer from "../Components/Global/Footer";
import BookOfTheMonth from "../Components/BookOfTheMonth";
import LetUsKnow from "../Components/LetUsKnow";
function BooksPage(){
    return (
        <div>
            <Navbar />
            <ImageCoverWithText Image={BooksPageImage} Title="Books" Subtitile="Dive into a world full of words and imagination" />
            <BookOfTheMonth />
            <LetUsKnow />
            <BooksSlider />
            <Footer />
        </div>
    )
}
export default BooksPage;