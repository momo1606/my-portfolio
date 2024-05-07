import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <h1 className="display-4 mt-5">Let's Talk</h1>
      <h1 className="bold-text bg-text">Contact</h1>
      <div className="text-left">
        <div className="pt-5">
          <h2 className="mb-5">
            Have a great product and need a {"job profile"} or just want to have
            a chat?
            <br />
            My inbox is always open!
          </h2>
          <ul className="social-links list-unstyled mt-4">
            <li>
              <a
                href="mailto:hatimpatrawala786@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-regular fa-envelope fa-xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Hatim001"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hatim-patrawala/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
