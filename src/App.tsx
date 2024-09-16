import './App.css'
import Homepage from './Pages/Homepage'
import Eventpage from './Pages/Eventpage'
import Contactpage from './Pages/Contactpage'
import BooksPage from './Pages/BooksPage'
import AboutUsPage from './Pages/AboutUsPage'
import ThankYouPage from './Pages/ThankYouPage'
import './Components/Global/Global.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


function App() {  
  return (
    <>
    <HashRouter >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Events" element={<Eventpage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Books" element={<BooksPage />} />
        <Route path="/About" element={<AboutUsPage />} />
        <Route path="/ThankYou" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
