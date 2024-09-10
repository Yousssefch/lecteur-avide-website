import "./Chapter1.css";
import Chapter1Image from "../../assets/AboutUsPage/Chapter1Image.jpg";

function Chapter1(){
    return (
    <div className="Chapter1ContainerOne">
    
    <div className="Chapter1ContainerTwo">

    <div className="Chapter1ContainerText">
    <h1 className="Chapter1Title">Chapter 1: Who are we?</h1>
    <div className="Chapter1SubtitleContainer">
    <p className="Chapter1Subtitle">
    We are a group of friends with a shared passion for reading who decided to create something special at uOttawa—a university reading club where students can come together to explore literature and exchange ideas. Our club was born out of a desire to connect with others who love books as much as we do, and to build a community where everyone feels welcome. Whether you’re a lifelong reader or just starting out, our club is a place for friendship, discovery, and the joy of reading together.
    </p>
    </div>
    </div>

    <div className="Chapter1ContainerImage">
    <img src={Chapter1Image} className="Chapter1Image" alt="Chapter1Image" />
    </div>

    </div>

    </div>

    )

}
export default Chapter1;