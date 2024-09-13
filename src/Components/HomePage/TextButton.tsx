import 'bootstrap/dist/css/bootstrap.css';
import './TextButton.css';
import ContactUsImage from "../../assets/Homepage/ContactUsImage.svg";

function TextButton() {
    let basename = import.meta.env.BASE_URL;
    return (
        <div className='TextButtonWrapper'>
        <div className='TextButtonContainer'>
        <div className='TextButtonLeft'>
        <img src={ContactUsImage} className='img-fluid  TextButtonLeftImage' alt="ContactUsImage" />
        </div>
        <div className='TextButtonRightContainer'>
            <h1 className='TextButtonTitle'>Need to contact us?</h1>
            <h3 className='TextButtonSubtitle'>Let us know what’s in your mind</h3>
            <button type="button" onClick={() => location.href = basename + "#/Contact"} className="TextButtonButton btn btn-dark">Contact us</button>
        </div>
        </div>
        </div>
    )
}
export default TextButton;