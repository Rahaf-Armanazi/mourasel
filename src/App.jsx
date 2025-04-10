// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Index from "./Frontend/HomePage/Index"
// import Pricing from "./pages/Pricing";
// import Features from "./pages/Features";
// import Blogs from "./pages/Blogs";
// import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
// // import Faq from "./pages/Faq";
// import FaqBlade from "./Frontend/HomePage/FaqBlade";
// import Login from "./pages/Login";
// import ResetPass from "./components/login/ResetPass";
// import ResetPassaftersendemail from "./components/login/ResetPassaftersendemail";

// import ListBlade from "./Frontend/blog/ListBlad";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<Index />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/features" element={<Features/>}/>
//         <Route path="/blogs" element={<Blogs/>}/>
//         <Route path="/contactus" element={<ContactUs/>}/>
//         <Route path="/aboutus" element={<AboutUs/>}/>
//         {/* <Route path="/faq" element={<Faq/>}/> */}
//         <Route path="/faq" element={<FaqBlade/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/resetpassword" element={<ResetPass/>}/>
//         <Route path="/ResetPassaftersendemail" element={<ResetPassaftersendemail/>}/>
//         <Route path="/blog" element={<ListBlade/>}/>
//         {/* <Route path="/user/dashboard" element={<Dashboard/>}/> */}

//       </Routes>
//     </Router>
//   );
// };

// export default App;      



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index1 from "./Frontend/HomePage/Index1"

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Index1 />} />
          
        </Routes>
      </Router>
  );
};

export default App;  