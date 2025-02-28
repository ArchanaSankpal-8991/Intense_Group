// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Companies from './pages/Companies';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {
//   return (
//     <div className="App">

// <Router>
//       <Header />
//       <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//        <Route path="/services" element={<Companies />} />
        
//       </Routes>
//       <Footer/>
//     </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './assets/style.css';

const App = () => {
  return (
    <Router>
      <div style={{ marginBottom: '100px' }}>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> */}
        <div className='background'> 
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
    
  );
};

export default App;
