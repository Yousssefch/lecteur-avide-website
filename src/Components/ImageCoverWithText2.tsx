import Image1 from '../assets/Homepage/Image2.webp';
import './ImageCoverWithText2.css';


function ImageCoverWithText2() {
    let basename = import.meta.env.BASE_URL;
    return (
        <div className='ImageCov2'>
        <div className='globalContainer'>
            <div className='leftTextContainer'>
                <h1 className='LeftTitle'>Meet the Team</h1>
                <h2 className='LeftSubTitle'>Get to know the team better through their words !</h2>
                <button type="button" onClick={() => location.href= basename + "#/About"} className="TextButtonButton btn btn-dark">About us</button>
            </div>
            <div className='rightImageContainer'>
            <img src={Image1} className='img-fluid  RightImage' alt="Image1" />
            </div>
            

        </div>
        
        </div>
    )
};
export default ImageCoverWithText2;