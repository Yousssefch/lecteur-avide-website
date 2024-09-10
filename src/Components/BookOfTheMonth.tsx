import "./BookOfTheMonth.css"
import PetitPrince from "../assets/BooksPage/PetitPrince.svg"
import { getFetchDatabase } from "../Utils/Utils";

function BookOfTheMonth() {

  let bookOfTheMonth = getFetchDatabase("BookOfTheMonth");


  if (bookOfTheMonth == undefined) {
    return(
      <div>
        
      </div>
    )
    
  }
  return (
    <div className="BookOfTheMonth">
        <h1 className="BookOfTheMonthHeader">Book of the Month</h1>

        <div className="BookOfTheMonthUnderlineContainer">
        <div className="BookOfTheMonthUnderline" />
        </div>

        <div className="BookOfTheMonthContainer">
            <div className="BookOfTheMonthImageContainer">
                <img src={bookOfTheMonth.at(0) != undefined? bookOfTheMonth.at(0)["ImagePath"]: ""} alt="Petit Prince" className="BookOfTheMonthImage"/>
            </div>
            <div className="BookOfTheMonthTextContainer">
                <h2 className="BookOfTheMonthTitle">{bookOfTheMonth.at(0) != undefined? bookOfTheMonth.at(0)["BookTitle"]: ""}</h2>
                <p className="BookOfTheMonthSubtitle"></p>
            </div>
        </div>
    </div>
  );
}
export default BookOfTheMonth;