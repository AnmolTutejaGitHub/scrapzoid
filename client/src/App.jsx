import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APIdocs from "./Components/APIdocs";
import Scrap from "./Components/Scrap";
import { Toaster } from 'react-hot-toast';
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <div className="pt-24"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrap" element={<Scrap />} />
          <Route path="/docs" element={<APIdocs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
