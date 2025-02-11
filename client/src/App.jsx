import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Scrap from "./Components/Scrap";
import { Toaster } from 'react-hot-toast';
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
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
