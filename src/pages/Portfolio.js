import React from 'react'
import img1 from "../assets/images/project-new-1.jpg";
import img2 from "../assets/images/project-2.png";
import img3 from "../assets/images/project-3.jpg";
import img4 from "../assets/images/project-4.png";
import img5 from "../assets/images/project-5.png";
import img6 from "../assets/images/project-6.png";
import img7 from "../assets/images/project-new-5.jpg";

 const Portfolio = ({active}) => {
    return(
      <article className={active === 2 ? "portfolio active" : "portfolio"}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <i className="bi bi-plus"></i>
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div> */}

        <ul className="project-list">
          <li className="project-item  active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="bi bi-plus"></i>
                </div>

                <img src={img1} alt="finance" loading="lazy" />
              </figure>

              <h3 className="project-title">Parking Management Web App </h3>

              <p className="project-category">Laravel + React Js</p>
            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="mobile development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="bi bi-plus"></i>
                </div>

                <img src={img2} alt="orizon" loading="lazy" />
              </figure>

              <h3 className="project-title">Visit Management Web App </h3>

              <p className="project-category">Laravel + React Js</p>
            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="bi bi-plus"></i>
                </div>

                <img src={img3} alt="fundo" loading="lazy" />
              </figure>

              <h3 className="project-title">Visit Management Mobile App</h3>

              <p className="project-category">React Native + Node + Express</p>
            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="applications">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="bi bi-plus"></i>
                </div>

                <img src={img7} alt="brawlhalla" loading="lazy" />
              </figure>

              <h3 className="project-title">E-Commerce  Web App</h3>

              <p className="project-category">React Js + Firebase Auth</p>
            </a>
          </li>

          <li className="project-item  active" data-filter-item data-category="web design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="bi bi-plus"></i>
                </div>

                <img src={img4} alt="dsm." loading="lazy" />
              </figure>

              <h3 className="project-title">Parking Management Mobile App</h3>

              <p className="project-category">Kotlin ( coming soon )</p>
            </a>
          </li>


        </ul>
      </section>
    </article>
    )
}


export default Portfolio