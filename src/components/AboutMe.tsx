import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <h4 className="display-4">A little about me,</h4>
      <div className="row">
        <div className="col-lg-6 wrap text-left px-1">
          <div className="about-desc">
            <h1 className="bold-text">About</h1>
            <div className="pt-5">
              <h2 className="mb-5">Hello!</h2>
              <p>
                Full-stack Developer skilled in JavaScript, Python, React, and
                AWS, with a focus on developing scalable microservices and
                proof-of-concept projects. Proficient in modern JavaScript
                frameworks, with a strong foundation in AWS cloud services,
                dedicated to enhancing user experiences and optimizing
                application performance.
              </p>
              <ul className="social-links list-unstyled mt-4">
                <li>
                  <a href="mailto:hatimpatrawala786@gmail.com">
                    <i className="fa-regular fa-envelope fa-xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hatim001">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hatim-patrawala/">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wrap align-content-center px-1">
          <div className="row mt-5 flex-column">
            <div className="col-md-8">
              <h2 className="mb-4">My Skills</h2>
            </div>
            <div className="col-md-6 mt-3">
              <div className="progress-wrap">
                <h5>Backend</h5>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="progress-wrap">
                <h5>Frontend</h5>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="progress-wrap">
                <h5>Cloud & DevOps</h5>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
