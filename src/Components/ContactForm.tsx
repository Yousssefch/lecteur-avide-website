import "./ContactForm.css";
function ContactForm(){
    let basename = import.meta.env.BASE_URL;
    return (
        <div className="contactFormContainer">
            
            <form className="contactForm" action="https://formspree.io/f/xeojwrkd" method="POST">

                <div className="contactText">
                <h1 className="contactTitle">Contact us</h1>
                <p className="contactSubTitle">We will get back to you as soon as possible</p>
                </div>


                <div className="contactHolder">
                <h2 className="contactTextHolder">Full Name :</h2>
                <input type="text" className="contactInput contactInputInfo"  />
                </div>

                <div className="contactHolder">
                <h2 className="contactTextHolder">Subject :</h2>
                <input type="text" className="contactInput" />
                </div>

                <div className="contactHolder">
                <h2 className="contactTextHolder">Email :</h2>
                <input type="email" name="email" className="contactInput"  />
                </div>

                <div className="contactHolder">
                <h2 className="contactTextHolder">Message :</h2>
                <textarea className="contactMessage" name="message" id="comment"></textarea>
                </div>

                <button className="contactButton" type="submit" onClick={() => location.href = basename + "/ThankYou"}>Send</button>
            </form>
        </div>
    )
}
export default ContactForm;