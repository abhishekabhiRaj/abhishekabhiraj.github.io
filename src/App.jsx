import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import myAvatar from "./assets/images/my-avatar.png";

import  Resume  from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { About } from "./pages/About";

function App() {
  // element toggle function
  const sidebar = document.querySelector("[data-sidebar]");
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  const [active, setActive] = useState(0);

  return (
    <>
      <main>
        {/* sidebar */}
        <aside className="sidebar" data-sidebar>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img src={myAvatar} alt="Abhishek Raj" width="80" />
            </figure>

            <div className="info-content">
              <h1 className="name" title="Abhishek Raj">
                Abhishek Raj
              </h1>

              <p className="title">Full-Stack Developer</p>
            </div>

            <button className="info_more-btn" data-sidebar-btn onClick={() => elementToggleFunc(sidebar)}>
              <span>Show Contacts</span>

              {/* <i className="bi bi-plus"></i> */}
            </button>
          </div>

          <div className="sidebar-info_more">
            <div className="separator"></div>

            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Email</p>

                  <a href="mailto:ryabhishek@yahoo.com" className="contact-link">
                    ryabhishek@yahoo.com
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Phone</p>

                  <a href="tel:+91 7250479880" className="contact-link">
                    +91 7250479880
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <i className="bi bi-calendar-event"></i>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Birthday</p>

                  <time dateTime="2001-05-27">May 27, 2001</time>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Location</p>

                  <address>Kundanahalli, Bangalore, India</address>
                </div>
              </li>
            </ul>

            <div className="separator"></div>

            <ul className="social-list">
              <li className="social-item">
                <a href="https://www.linkedin.com/in/abhishek-raj-77b081247/" target="_" className="social-link">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>

              <li className="social-item">
                <a href="https://github.com/abhishekabhiRaj/" target="_" className="social-link">
                  <i className="bi bi-github"></i>
                </a>
              </li>

              {/* <li className="social-item">
                <a href="#" className="social-link">
                  <i className="bi bi-plus"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </aside>
        {/* sidebar */}

        {/* main content */}
        <div className="main-content">
          {/* nav */}
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button className={active === 0 ? "navbar-link  active" : "navbar-link"} onClick={() => setActive(0)}>
                  About
                </button>
              </li>

              <li className="navbar-item">
                <button
                  className={active === 1 ? "navbar-link  active" : "navbar-link"}
                  onClick={() => {
                    setActive(1);
                  }}
                >
                  Resume
                </button>
              </li>

              <li className="navbar-item">
                <button
                  className={active === 2 ? "navbar-link  active" : "navbar-link"}
                  onClick={() => {
                    setActive(2);
                  }}
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </nav>
          
          <About active={active} /> 

          <Resume active={active} />

          <Portfolio active={active} />
        </div>
      </main>
    </>
  );
}

export default App;
