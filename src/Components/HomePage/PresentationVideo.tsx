import "./PresentationVideo.css";
export default function PresentationVideo() {
    return(
        <div className="PresentationVideoContainer">

            <div className="PresentationVideoText">
                <h1 className="PresentationVideoTitle">Presentation Video</h1>
                <h2 className="PresentationVideoSubtitle">Learn more about the Avid Readers Club</h2>
            </div>

            <div className="PresentationVideoContainerTwo">
            <iframe width={window.innerWidth>= 789? window.innerWidth*0.4:window.innerWidth*0.8} height={window.innerWidth>= 789? window.innerWidth*0.2:window.innerWidth*0.4} allow="autoplay" className="PresentationVideo" src="https://www.youtube.com/embed/lp-Y1yvsv_I?si=8oGm92WHXY5TeAEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </div>
        </div>
    )
}