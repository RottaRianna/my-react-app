import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">About Me</Link>
      <Link to="/api">API Project</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about"> About this Portfolio</Link>
    </nav>
  );
}

function Api() {
  return (
    <div className="section">
      <h2>API Project</h2>
      <p>This was written in the Parent component, but displayed here.</p>
      <img src="http://localhost/Portfolio/images/ApiSivu.png" alt="API Project" />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="section">
      <h2>Portfolio</h2>
      <img src="http://localhost/Portfolio/images/KGSivu.png" alt="Portfolio" className="image" />
    </div>
  );
}

function Shop() {
  return (
    <div className="section">
      <h2>Shop</h2>
      <img src="http://localhost/Portfolio/images/KGSivu.png" alt="Shop" className="image" />
    </div>
  );
}

function About() {
  return (
    <div className="section">
      <h2>Information on this Portfolio</h2>
      <p>This Portfolio is created using React. It's </p>
      <img src="http://localhost/Portfolio/images/KGSivu.png" alt="Shop" className="image" />
    </div>
  );
}
function Me() {
  return (
    <div className="section">
      <h1>About Me</h1>
      <p>My name is Rianna. I have studied software development for 3 years.</p>

      
      <div className="profile-container">
        <img
          className="profile-pic"
          src="your-image.jpg"
          alt="Rianna"
        />
        <div className="experience">
          <h2>Experience</h2>
          <ul>
            <li>HTML</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>API</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      <h2>My CVs</h2>
      <div className="cv-buttons">
        <a href="https://geronimo.okol.org/~sarria/Portfolio/CV" target="_blank" rel="noreferrer">
          <button>CV (Finnish)</button>
        </a>
        <a href="https://geronimo.okol.org/~sarria/Portfolio/CVEN" target="_blank" rel="noreferrer">
          <button>CV (English)</button>
        </a>
      </div>
    </div>
    
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/api" element={<Api />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
