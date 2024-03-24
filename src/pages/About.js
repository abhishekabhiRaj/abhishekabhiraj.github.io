import React from "react";
import img1 from "../assets/images/icon-design.svg";
import img2 from "../assets/images/icon-app.svg";
import img3 from "../assets/images/icon-dev.svg";

export const About = ({active}) => {
    return(
        <article className={active === 0 ? "about  active" : "about"}>
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
              <p>
                Hi there! <br /> I'm a Full-Stack Web and Mobile App Developer with 1.4 years of experience bringing ideas to life through code. I'm passionate about creating user-friendly and responsive applications, and I thrive in environments that allow me to leverage my skills across the entire development stack.
              </p>
            </section>

            {/* <!--
          - service
        --> */}

            <section className="service">
              <h3 className="h3 service-title">What I Do</h3>

              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    <img src={img1} alt="design icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Backend Development</h4>

                    <p className="service-item-text">
                      <b>Tech I Use -</b>
                      <span>Laravel, Node Js, Express Js, MySql, Mongo DB</span>
                    </p>
                  </div>
                </li>

                <li className="service-item">
                  <div className="service-icon-box">
                    <img src={img2} alt="design icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Mobile App Development</h4>

                    <p className="service-item-text">
                      <b>Tech I Use -</b>
                      <span>React Native</span>
                    </p>
                  </div>
                </li>

                <li className="service-item">
                  <div className="service-icon-box">
                    <img src={img3} alt="Web development icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web App Development</h4>

                    <p className="service-item-text">
                      <span>Tech I Use - React Js, Bootstrap, Tailwind CSS</span>
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="clients">
              <h3 className="h3 clients-title">Skills</h3>

              <ul className="clients-list has-scrollbar">
                <li className="clients-item">
                  <span style={{ color: "#fff" }}>Laravel</span>
                </li>

                <li className="clients-item">
                  <span style={{ color: "#fff" }}>Node Js</span>
                </li>

                <li className="clients-item">
                  <span style={{ color: "#fff" }}>Express Js</span>
                </li>

                <li className="clients-item">
                  <span style={{ color: "#fff" }}>React Native</span>
                </li>

                <li className="clients-item">
                  <span style={{ color: "#fff" }}>React JS</span>
                </li>

                <li className="clients-item">
                  <span style={{ color: "#fff" }}>MySql</span>
                </li>
                <li className="clients-item">
                  <span style={{ color: "#fff" }}>Mongo DB</span>
                </li>
              </ul>
            </section>
          </article>
    )
}