import ContactForm from "./ContactForm";
import "./ContactBody.css";
import ghostContactPage from "../assets/ContactPage/ghostContactPage.svg"

function ContactBody() {
  return (
    <div className="contactBody">
        <div className="ghostImageContainer">
        <img src={ghostContactPage} alt="ghostContactPage" className="ghostContactPage"/>
        </div>
        <ContactForm />
    </div>
  )
}
export default ContactBody;