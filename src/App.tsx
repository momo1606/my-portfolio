import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import Footer from "./components/Footer";

import "./styles/index.css";

const App = () => {
  const SECTIONS = [
    {
      id: "hero",
      component: Hero,
    },
    // {
    //   id: "about-me",
    //   component: AboutMe,
    // },
    // {
    //   id: "tech-stack",
    //   component: TechStack,
    // },
    // {
    //   id: "experience",
    //   component: Experience,
    // },
    // {
    //   id: "education",
    //   component: Education,
    // },
    // {
    //   id: "projects",
    //   component: Projects,
    // },
    // {
    //   id: "contact-me",
    //   component: Contact,
    // },
    {
      id: "footer",
      component: Footer,
    }
  ];

  return (
    <Fragment>
      <Header />
      <div className="container px-5">
        {SECTIONS?.map((section, index: number) => {
          const { id, component: Component } = section;
          return (
            <Element key={index} name={id} className="element">
              <Component />
            </Element>
          );
        })}
      </div>
    </Fragment>
  );
};

export default App;
