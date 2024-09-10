import { getFetchDatabase } from "../Utils/Utils";
import "./BooksSlider.css";
import { Carousel } from "react-bootstrap";

function BooksSlider(){

    const tempBooks = getFetchDatabase("Books");
    const books = tempBooks.slice(1, tempBooks.length); //Cut the example structure book from the list

    return (
        <div className="BookSliderFullContainer">
        <h1 className="BooksSliderTitle">Recommendations:</h1>
        <div id="carouselExampleSlidesOnly" className="BooksSliderContainer" data-bs-ride="carousel">
            
            <div className="BooksSlider carousel-inner">
            <Carousel fade className="BookSliderCarousel">
                {books.map((book) => (
                    <Carousel.Item>
                    
                    {/* <div className="BookSliderBookTitle">
                        <h1 className="BookSliderCaption">{book["Title"]}</h1>
                    </div> */}
                    
                    <div className="BookCard d-flex justify-content-center">
                        <img src={book["BookCover"]} alt="Book Cover"  className="BooksSliderImages"/>
                        
                        <div className="BookSliderOverlay"></div>
                    </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
            
        </div>
        </div>
    )
}
export default BooksSlider;