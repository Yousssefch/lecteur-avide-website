import "./BookCover.css";
import BookImage from "../assets/Homepage/BookImage.svg"

function BookCover(){
    return (
        <div className="BookCoverContainer">
            <div className="BookCoverTextButton">
                <h1 className="BookCoverTitle">Check out our recommendations!</h1>
                <p className="BookCoverSubtitle">Our recommendations change regularly so make sure to visit our page more often</p>
                <button className="BookCoverButton">Books</button>
            </div>
            <img src={BookImage} alt="Book Cover" className="BookCoverImage" />
        </div>
    )
}
export default BookCover;