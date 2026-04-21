import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './style.css';
import portfolioImage from './photos/portfolio.png';
import portfolioImage2 from './photos/Portfol2.png';
import portfolioImage3 from './photos/portfol3.png';
import apiImage1 from './photos/APIkuva1.png';
import apiImage2 from './photos/APIkuva2.png';
import apiImage3 from './photos/APIkuva3.png';
import kgImage from './photos/kgIMG.png';
import kgImage2 from './photos/kgIMG2.png';
import kgImage3 from './photos/kpIMG3.png';
import portfolKuva1 from './photos/portfolKuva1.png';
import portfolKuva2 from './photos/portfolKuva2.png';
import portfolKuva3 from './photos/portfolKuva3.png';
import myVideo from './photos/Video.mp4'


import React, { useState, useEffect } from "react";

const hobbies = [
  { text: "🖌️Art🖌️", animation: "paintbrush" },
  { text: "🎮Gaming🎮", animation: "gaming" },
  { text: "📷Photographing📷", animation: "flash" },
  { text: "🎞️Video editing🎞️", animation: "video" },
  { text: "🎧Listening to music🎧", animation: "music" },
  { text: "🖋️Writing🖋️", animation: "writing" }
];

function HobbiesTicker() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % hobbies.length); // next hobby
        setFade(true); // fade in new hobby
      }, 500); // fade duration
    }, 3000); // display time per hobby

    return () => clearInterval(interval);
  }, []);

  const currentHobby = hobbies[current];

  // Determine CSS class based on animation and fade
  const animationClass = fade
    ? `${currentHobby.animation}-in`
    : `${currentHobby.animation}-out`;

  return (
    <div className="hobbies-box">
      <h2>My Hobbies</h2>
      <p className={animationClass}>{currentHobby.text}</p>
    </div>
  );
}

export default HobbiesTicker;



function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">About Me</Link>
      <Link to="/api">API Project</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">This Portfolio</Link>
      <Link to="/wordpress">Wordpress</Link>
    </div>
  );
}

function Api() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false); // FIXED

  const images = [apiImage1, apiImage2, apiImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">

      <div className="container">
        {/* Image preview carousel */}
        <div className="preview-wrapper">
          <img
            key={current}                 // ← VERY IMPORTANT for animation
            src={images[current]}
            alt="API Preview"
            className="preview-image"
          />
        </div>
      </div>

      <h2>API Project</h2>
      <p>On this project I decided to try to make my own API.</p>

      <div className="experience">
        <ul>
          <Skill name="HTML" />
          <Skill name="Javascript" />
          <Skill name="PHP" />
          <Skill name="CSS" />
          <Skill name="SQL" />
          <Skill name="API" />
        </ul>
      </div>
      <div className="cv-button">
        <a href="https://geronimo.okol.org/~sarria/API_Websivu/" target="_blank" rel="noreferrer">
          <button>Visit Project</button>
        </a>
        <a href="https://geronimo.okol.org/~sarria/API_Websivu/api.php" target="_blank" rel="noreferrer">
          <button>API</button>
        </a>
      </div>
      <button className="slide-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide details ▲" : "More about this project ▼"}
      </button>

      <div className={`slide-panel ${open ? "open" : ""}`}>
        <p>
          I started by designing the data I wanted in the API.
          The data was: Name, Element, Weapon, Rarity and the images associated with them.
          After this I searched for a page that explains how to make an API by yourself.
          <br /><br />
          <a href="https://www.geeksforgeeks.org/php/building-a-rest-api-with-php-and-mysql/" target="_blank" rel="noreferrer">Building a REST API with PHP and MySQL - GeeksforGeeks</a>
          <br /><br />
          I created a database table in PHPmyadmin with the following tables: Name, Element, Weapon, Rarity, WeaponImage, ElementImage, SmallImage, and BigImage.
          Once the database was ready,
          I started creating the API for the site.
          When the API was ready, I created a file in Visual Studio and started working on the current project using my first API project.
          I used the cards, search function, and animations from the old file.
          New features include: Pop-up background color changes based on the element received from the API, background music and the ability to mute it,
          and a custom loading animation that fits the mood of the game.
          Finally, I tested the API in Postman. Only when the work was finished did I realize that I hadn't created a GitHub repository with the code files.
          I added the files to the same GitHub repository as the previously added images.
          <br /><br />
          It was a bit difficult to apply from the old file to the new file. I minimized the use of AI during the work, so it took longer to figure out the problems.
          The images that I originally added to the database were broken,
          so I had to create a GitHub file and add all the images again.
          When the work and API were transferred to public server, it did not work as expected.
          The problem was found with the help of my teacher and it was solved.
          There were also problems with the loading animation.
          I made the animation many times, but it always had a color as a background.
          In the end, I used a free website where you could make a GIF with an invisible background.
          <br /><br />
          <a href="https://ezgif.com/" target="_blank" rel="noreferrer">Ezgif - free online animated GIF editor</a>
          <br /><br />
          I also had a problem with the music, when I couldn't get it to play.
          However, I asked AI for help with this, and I found a solution.
        </p>
      </div>
    </div>
  );
}


function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false); // FIXED

  const images = [portfolioImage, portfolioImage2, portfolioImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">

      <div className="container">
        {/* Image preview carousel */}
        <div className="preview-wrapper">
          <img
            key={current}                 // ← VERY IMPORTANT for animation
            src={images[current]}
            alt="API Preview"
            className="preview-image"
          />
        </div>
      </div>


      <h2>Portfolio (Old)</h2>
      <p>This was my old Portfolio. I was not satisfied with it and decided to make a new one.</p>

      <div className="experience">
        <ul>
          <Skill name="HTML"></Skill>
          <Skill name="Javascript"></Skill>
          <Skill name="CSS"></Skill>
        </ul></div>

      <div className="cv-button">
        <a href="http://localhost/Portfolio/index.php?page=etusivu" target="_blank" rel="noreferrer">
          <button>Visit Project</button>
        </a>
      </div>
      <button className="slide-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide details ▲" : "More about this project ▼"}
      </button>

      <div className={`slide-panel ${open ? "open" : ""}`}>
        <p>
          This was my first try on making a Portfolio.
          I tried using skills I have learnt during my courses.
          However I did not get far with it to finnish it.
          I got a react course and wanted to start again with my portfolio.
          <br /><br />
          In this project I use simple animations, two languages and styling.
        </p>
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <li>{props.name}</li>
  );
}


function Shop() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false); // FIXED

  const images = [kgImage, kgImage2, kgImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">

      <div className="container">
        {/* Image preview carousel */}
        <div className="preview-wrapper">
          <img
            key={current}                 // ← VERY IMPORTANT for animation
            src={images[current]}
            alt="API Preview"
            className="preview-image"
          />
        </div>
      </div>


      <h2>Online shop</h2>
      <p>This is a group project I was part of</p>

      <div className="experience">
        <ul>
          <Skill name="HTML"></Skill>
          <Skill name="Javascript"></Skill>
          <Skill name="PHP"></Skill>
          <Skill name="CSS"></Skill>
          <Skill name="SQL"></Skill>
        </ul>
      </div>

      <div className="cv-button">
        <a href="https://geronimo.okol.org/~sarria/PHP-Verkkokauppa/" target="_blank" rel="noreferrer">
          <button>Visit Project</button>
        </a>
        <a href="https://github.com/olicodeman/PHP-Verkkokauppa" target="_blank" rel="noreferrer">
          <button>Github</button>
        </a>
      </div>
      <button className="slide-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide details ▲" : "More about this project ▼"}
      </button>

      <div className={`slide-panel ${open ? "open" : ""}`}>
        <p>The project began by creating a GitHub repository for version control.
          Initially, config.php,
          login and registration forms, and session management from previous projects were imported into the project.
          <br /><br />
          Next, user management was implemented, which includes login and registration pages.
          These allow users to create accounts and manage their profiles.
          The profile page was given the ability to view and edit their own information,
          as well as view previous orders and their details.
          <br /><br />
          The design and implementation of the website's appearance began with CSS.
          A list of all products was added to the product page,
          as well as the ability to add new products via the administrator view.
          In addition, a search function and category filter were implemented,
          allowing the user to search for products either by name or by category.
          <br /><br />
          The presentation of products was improved with a pop-up window that shows additional information about the product.
          The functionality of the shopping cart was improved by adding the ability to edit the quantity of products to be ordered and a notification that warns
          if the product is not available or if the stock balance is not sufficient for the quantity ordered.
          <br /><br />
          The admin page was further developed by adding a dashboard in connection with product addition.
          Through the dashboard, the administrator can add, edit and delete products and view
          sales reports and analytics, such as best-selling products and low-stock products
          <br /><br />
          The ordering process was improved by implementing an order confirmation page
          where the user can review their purchase before finalizing the order.
          In addition, a payment method selection was added
          so that the user can choose the payment option that suits them.
          <br /><br />
          To improve the user experience, a review system was added to the online store.
          Users can give reviews to products, and on the reviews page you can read other users' experiences
          and filter reviews by language, star rating or by product.
          <br /><br />
          The accessibility of the website was improved by adding multilingual support.
          The English version was implemented with separate translation files,
          and the database was modified to support multilingualism so that product information
          and the user interface can be displayed in different languages.
          <br /><br />
          The work was divided into pairs, and both parties
          were responsible for their own areas. The end result was a functional and user-friendly
          online store that can be further developed as needed.

        </p>
      </div>
    </div>
  );
}

function About() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false); // FIXED

  const images = [portfolKuva1, portfolKuva2, portfolKuva3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">

      <div className="container">
        {/* Image preview carousel */}
        <div className="preview-wrapper">
          <img
            key={current}                 // ← VERY IMPORTANT for animation
            src={images[current]}
            alt="API Preview"
            className="preview-image"
          />
        </div>
      </div>


      <div className="experience">
        <ul>
          <Skill name="HTML"></Skill>
          <Skill name="Javascript"></Skill>
          <Skill name="CSS"></Skill>
          <Skill name="React"></Skill>
        </ul>
      </div>

      <div className="cv-button">
        <a href="https://github.com/RottaRianna/my-react-app" target="_blank" rel="noreferrer">
          <button>Github</button>
        </a>
      </div>
      <button className="slide-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide details ▲" : "More about this project ▼"}
      </button>

      <div className={`slide-panel ${open ? "open" : ""}`}>
        <p>
          In this project I got my first touch on react programming. 
          This portfolio was a project I built to improve my React skills.
           I learned how to build reusable components, implement routing, add animations, 
           create responsive designs, and structure CSS for scalable layouts. 
          I also explored UI/UX design principles by crafting a clean, profile-focused interface.
          <br /><br />
          My goal was to upgrade the outlook of the project. 
          I aimed for a modern and interactive portfolio, instead of an older style.
        </p>
      </div>
      <div className="container">


      </div>
    </div>
  );
}

function Wordpress() {
  const [open, setOpen] = useState(false); // FIXE
  return (
    <div className="section">

      <video width="600" controls autoPlay>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Information on WordPress project</h2>
      <p>This Online store is created using Wordpress</p>
      <h2>What was used:</h2>
      <div className="container">

        <div className="experience">
          <ul>
            <Skill name="HTML"></Skill>
            <Skill name="Javascript"></Skill>
            <Skill name="CSS"></Skill>
            <Skill name="WordPress"></Skill>
          </ul>
        </div>
      </div>

      <div className="cv-button">
        <a href="https://github.com/RottaRianna/my-react-app" target="_blank" rel="noreferrer">
          <button>Github</button>
        </a>
      </div>
      <button className="slide-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide details ▲" : "More about this project ▼"}
      </button>

      <div className={`slide-panel ${open ? "open" : ""}`}>
        <p>
          I wanted to use a cafe theme for my work, so I used “Coffee Shop:Cafe -WpDevArt”.
          I made some color changes to it to fit the space theme.
          I used navy blue and white as the main colors and added a little gold touch here and there.
          <br /><br />
          There were many problems during the project.
          Right at the beginning of the project, XAMPP didn't want to work at all,
          and I fixed it many times, and because of that, I couldn't get anything done in the class.
          Then I decided to look for a better free tool to use.
          I found an application called "Local" online.
          I then changed the location of my site from XAMPP to Local.
          <br /><br />
          I used some plugins during the project, such as:
          <br />
          • WooCommerce (for making a store).
          <br />
          • Easy Maps Block (adding a map to the contact page).
          <br />
          • User Menus (sets rules for what a specific user can see and what not; in my own project this was used on the staff page).
          <br />• WPForms Lite (made it easier to create a contact form).
        </p>
      </div>
      <div className="container">

      </div>
    </div>
  );
}
function Me() {
  return (
    <div id="myPageContent" className="container-fluid">
      <div id="textSlider" className="row">

        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 iamCol">
          <p className='experienceText'>Experience with:</p>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
          <div className="scroller">
            <ul className="skills-list">
              <Skill name="HTML"></Skill>
              <Skill name="Javascript"></Skill>
              <Skill name="PHP"></Skill>
              <Skill name="CSS"></Skill>
              <Skill name="SQL"></Skill>
              <Skill name="React"></Skill>
              <Skill name="API"></Skill>
              <Skill name="Wordpress"></Skill>
            </ul>
          </div>
        </div>
      </div>


      <div key={window.location.pathname}> {/* Key changes with route */}


        <div className="Information">
          <h2>Information on me:</h2>

          <div className="info-hover">
            <div className="wrapper">
              <div className="box">

                <div className="hover-overlay">Hover image for info</div>
                <img
                  src="http://localhost/Portfolio/images/portrait.jpg"
                  alt="Rianna"
                />

              </div>
            </div>
            <div className="info-text ">
              <p>Name: Rianna</p>
              <p>Studies: 3 Years of studying Software development</p>
              <p>Occupation: Student</p>
            </div>
          </div>

          <h2>Language Skills</h2>
          <div className="language-section">
            <div className="language-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/330px-Flag_of_Finland.svg.png" />
              <div className="language">
                <div className="skill finnish">Native</div>
              </div>
            </div>

            <div className="language-item">
              <img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" />
              <div className="language">
                <div className="skill english">Fluent</div>
              </div>
            </div>
          </div>
          <div className="CV-Container">
            <h2>Check out my CV!</h2>
            <div className="cv-buttons">
              <a href="https://geronimo.okol.org/~sarria/Portfolio/CV" target="_blank" rel="noreferrer">
                <button>CV (Finnish)</button>
              </a>
              <a href="https://geronimo.okol.org/~sarria/Portfolio/CVEN" target="_blank" rel="noreferrer">
                <button>CV (English)</button>
              </a>
            </div>
          </div>


          <HobbiesTicker />

          <div className="CV-Container">
            <h2>Contact me</h2>
            <p>Gmail: riannakatariina@gmail.com</p>
          </div>
        </div>


      </div>
    </div>
  );
}
import SlideWrapper from "./SlideWrapper";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter basename="/~react-app">;

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={menuOpen ? "sidebar open" : "sidebar"}>
        <Sidebar />
      </div>

      <Sidebar />

      <Routes>
        <Route path="/" element={<SlideWrapper><Me /></SlideWrapper>} />
        <Route path="/api" element={<SlideWrapper><Api /></SlideWrapper>} />
        <Route path="/portfolio" element={<SlideWrapper><Portfolio /></SlideWrapper>} />
        <Route path="/shop" element={<SlideWrapper><Shop /></SlideWrapper>} />
        <Route path="/about" element={<SlideWrapper><About /></SlideWrapper>} />
        <Route path="/wordpress" element={<SlideWrapper><Wordpress /></SlideWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}



createRoot(document.getElementById('root')).render(<App />);
