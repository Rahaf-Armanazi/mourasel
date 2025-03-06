import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
    </Router>
  );
};

export default App;
