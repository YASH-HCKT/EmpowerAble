import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import CareOptions from './components/CareOptions'
import EnhancingLives from './components/EnhancingLives'
import SpecializedFocus from './components/SpecializedFocus'
import OurApproach from './components/OurApproach'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import MapSection from './components/MapSection'

const LandingPage = () => (
    <>
        <Navbar />
        <div className="pt-[80px]">
            <Hero />
            <AboutUs />
            <CareOptions />
            <EnhancingLives />
            <SpecializedFocus />
            <OurApproach />
            <Testimonials />
            <Partners />
            <ContactUs />
            <Footer />
        </div>
    </>
)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/explore" element={<><Navbar /><div className="pt-[80px]"><MapSection /></div></>} />
            </Routes>
        </Router>
    )
}

export default App
