import './ImageCoverWithText.css'
import 'bootstrap/dist/css/bootstrap.css';

function ImageCoverWithText({Image, Title, Subtitile}: {Image: string, Title: string, Subtitile: string}){
    return (
        <>
            <div className='Imagecontainer'>
                <img
                 src={Image} className='FrontPageImage1 img-fluid' alt="Image1" />
                <div className='blackBox' />
                <div className='Text'>
                <h1 className='Title'>{Title}</h1>
                <h3 className='Subtitle'>{Subtitile}</h3>
                </div>
            </div>
        </>
    )
}
export default ImageCoverWithText;