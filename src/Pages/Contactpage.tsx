import Navbar from "../Components/Global/Navbar"
import ContactBody from "../Components/ContactBody";
import Footer from "../Components/Global/Footer";
import ImageCoverWithText from "../Components/Global/ImageCoverWithText";
import ContactPageImage from "../assets/Homepage/ContactUsImage.svg";
function Contactpage(){
    return(
        <div>
            <Navbar/>
            <ImageCoverWithText Image={ContactPageImage} Title="Contact Us" Subtitile="Don't hesitate to reach us" />
            <ContactBody/>
            <Footer/>
        </div>
    )
}
export default Contactpage;