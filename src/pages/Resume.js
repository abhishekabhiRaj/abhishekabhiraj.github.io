import React from 'react'

 const Resume = ({active}) => {
    return(
        <article className={active === 1 ? "resume  active" : "resume"}>
            <header>
              <a href='#dd' className="h2 article-title" style={{ display: 'flex', cursor: 'pointer' }}> <span style={{ marginRight:'8px' }}>Resume</span> <span title="Download PDF"> <i className='bi bi-download'></i> </span> </a>
            </header>

            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <i className="bi bi-briefcase"></i>
                </div>

                <h3 className="h3">Experience</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Full-Stack Developer</h4>

                  <span>2022 — Present</span>

                  <p className="timeline-text">Currently, I work as a Full-Stack Developer using React and Laravel at Stellar Track Technologies Pvt. Ltd.</p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">React Developer ( Intern ) </h4>

                  <span> April 2022 — September 2022</span>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <i className="bi bi-book"></i>
                </div>

                <h3 className="h3">Education</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Bachelor's Of Science ( Information Technology ) </h4>

                  <span>Karim City College ( 2019 — 2022 )</span>

                  <p className="timeline-text">Percentage - 76%</p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Intermediate ( Physics , Chemistry, Maths )</h4>

                  <span>Jagjivan College ( 2016 — 2019 )</span>

                  <p className="timeline-text">Percentage - 76%</p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Matriculation</h4>

                  <span>Manav Bharti National School CBSE ( 2002 — 2004 )</span>

                  <p className="timeline-text">CGPA - 9.0</p>
                </li>
              </ol>
            </section>

            <section className="skill" style={{ display: "none" }}>
              <h3 className="h3 skills-title">My skills</h3>

              <ul className="skills-list content-card">
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Web design</h5>
                    <data value="80">80%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Graphic design</h5>
                    <data value="70">70%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Branding</h5>
                    <data value="90">90%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">WordPress</h5>
                    <data value="50">50%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: "50%" }}></div>
                  </div>
                </li>
              </ul>
            </section>
          </article>
    )
}


export default Resume