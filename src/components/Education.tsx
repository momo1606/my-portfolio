import React from "react";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}> 
      <h1 className="display-4 mt-5">Education</h1>
      <h1 className="bold-text bg-text">Academics</h1>
      <div className="row d-flex">
        <div className="col-md-10">
          <div className="py-4">
            <div className="desc">
              <h4>Master in Applied Computer Science</h4>
              <p>Dalhousie University</p>
            </div>
            <div>
              <p>September 2023 - December 2024</p>
            </div>
          </div>

          <div className="py-4">
            <div className="desc">
              <h4>Bachelors in Computer Engineering</h4>
              <p>University of Mumbai</p>
            </div>
            <div>
              <p>June 2016 - August 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
