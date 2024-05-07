import React from "react";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <div className="interests my-5" style={{ minHeight: "70vh" }}>
      <h1 className="display-4">Tech I'm familiar with</h1>
      <h1 className="bold-text bg-text">Tech Stack</h1>

      <div className="row pt-5">
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-brands fa-angular"></i>
            <h3>Python</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-brands fa-js"></i>
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-brands fa-java"></i>
            <h3>Java</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-brands fa-react"></i>
            <h3>React</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-brands fa-node"></i>
            <h3>Node</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-solid fa-database"></i>
            <h3>SQL / NoSQL</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-brands fa-aws"></i>
            <h3>Cloud Technologies</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa-brands fa-docker"></i>
            <h3>Docker</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
