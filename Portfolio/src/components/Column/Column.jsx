import React from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Column = () => {
  
  return (
    <>
      <div className="bg-gray-200 screenw-full screenh-full  justify-center rounded-xl shadow-2xl shadow-slate-950">
        <About />
        <Experience />
        <Projects />
        <Contact/>
      </div>
    </>
  );
};

export default Column;
