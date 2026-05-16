import './app.css'
import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import SideBar from './SideBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return(
    <div id="view">
      <header id="header">
        <nav>
          <div id="tabbar">
            <Link to="/"><img src="/logo.png" alt="logo" id="logo"></img></Link>
            <button onClick={() => setIsOpen(!isOpen)}id="menu"><img src="/menu.png" alt="menu" id="menu"></img></button>
          </div>
        </nav>
      </header>
      <aside className={`sidebar-container ${isOpen ? "is-open" : ""}`}>
        <SideBar/>
      </aside>
      <Routes>\
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div id="foot">
        <div id="line"></div>
          <p>&copy; 2026 Seojoon Lee</p>
        </div>
    </div>
  );
}

export default App
