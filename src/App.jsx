import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Pricing from './page/Pricing'
import Home from './page/Home'
import Test from './page/test'
import About from './page/About'
import { Route, Routes} from "react-router-dom"
import { motion, useScroll } from "framer-motion"
import PreLoader from './Components/PreLoader'
import BackToTop from './Components/BackToTop'

function App() {
  const [count, setCount] = useState(0)

  const { scrollYProgress } = useScroll();


  return (
    <>
    <PreLoader />
    <Navbar />
    <div className="container">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
    </Routes>
    <BackToTop />
    </div>
    <motion.div style={{ scaleX: scrollYProgress }} />
    <Footer />
    </>
  )
}


export default App
