import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Cursor from './component/cursor/Cursor';
import Home from './pages/Home';
// import LogoGrid from './component/logogrid/LogoGrid';
// import Workpage from './pages/Workpage';
import Work from './pages/work/Work';
import Podcastpage from './component/About/Podcastpage';
import About from './pages/About/About';
import Navbar from './component/navbar/Navbar';
import Services from './component/About/Services';
import CaseStudytwo from './component/About/CaseStudytwo';
import Footer from './component/footer/Footer';
import Watsapp from './component/watsapp/Watsapp';
import Homee from './component/spline/Homee';
import './cursor.css';  

// import PodcastSwiper from './component/swipper/PodcastSwiper';


function App() {
  return (
    <Router>
      <Watsapp/>
      {/* <Cursor /> */}
      <Navbar/>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </Router>
    //  <div>
    //   {/* <Marquee text="UGC Video" /> */}
    //   {/* <PodcastSwiper/> */}
    //   {/* <LogoGrid/> */}
    //   {/* <Podcastpage/> */}
    //   {/* <Services/> */}
    //   {/* <CaseStudytwo/> */}
    //   {/* <Footer/> */}
    
    // {/* <Homee/> */}
    //  </div>  

  );
}

export default App;
