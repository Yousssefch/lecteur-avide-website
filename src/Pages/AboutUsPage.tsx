import ImageCoverWithText from "../Components/Global/ImageCoverWithText";
import Navbar from "../Components/Global/Navbar";
import AboutUsImage from "../assets/AboutUsPage/AboutUsImage.jpg";
import Chapter1 from "../Components/AboutUsPage/Chapter1";
import Chapter2 from "../Components/AboutUsPage/Chapter2";
import Chapter3 from "../Components/AboutUsPage/Chapter3";
import Footer from "../Components/Global/Footer";
function AboutUsPage() {
    return (
        <div>
            <Navbar />
            <ImageCoverWithText Image={AboutUsImage} Title="About Us" Subtitile="We are a team of passionate readers who want to share words" />
            <Chapter1 />
            <Chapter2 />
            <Chapter3 />
            <Footer />
        </div>
    );
}
export default AboutUsPage;