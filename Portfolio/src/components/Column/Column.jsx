import React from "react";
import Maxi from "../../assets/Maxi.jpeg";
import download from "../../assets/download.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import work from "../../assets/work.png";
import coding from "../../assets/coding.png";
import cv from "../../doc/cv.pdf";
import ReactPlayer from "react-player/youtube";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import react from "../../assets/react.svg";
import firebase from "../../assets/firebase.png";
import javascript from "../../assets/javascript.svg";
import redux from "../../assets/redux.png";
import postgres from "../../assets/postgres.png";

const Column = () => {
  const dev = "<";
  const dev2 = "/>";
  return (
    <>
      <div className="bg-gray-200 screenw-full screenh-full   justify-center rounded-xl shadow-2xl shadow-slate-950">
        {" "}
        {/* Div principal */}
        <br />
        <img
          src={Maxi}
          alt=""
          className="rounded-full h-60 w-60 shadow-2xl object-cover ml-9 "
        />
        <h1 className="font-thin text-4xl"> Maximiliano Andrade.</h1>
        <h2 className="underline text-4xl">
          Fullstack <span className="text-blue-900 font-mono">developer.</span>
        </h2>
        <br className="my-4 border-gray-300" />
        <a
          href="https://www.linkedin.com/in/maximiliano-andrade-8ab0b6213/"
          target="_blank"
        >
          <span className="text-4xl font-thin">{dev}</span>

          <button className="rounded-md text-stone-950 text-sm px-2 inline-flex items-center font  hover:scale-110 transition-transform py-1">
            <img src={linkedin} alt="" className="h-7 mr-2 " />
          </button>
        </a>
        <a href="https://github.com/Maxxiandrade" target="_blank">
          <button className="rounded-md text-stone-950 text-sm px-1 inline-flex items-center font  hover:scale-110 transition-transform py-1">
            <img src={github} alt="" className="h-7 mr-2" />
          </button>
        </a>
        <a href={cv} download="Maximiliano Andrade CV">
          <button className="rounded-md text-stone-950 text-sm px-2 mr-2 inline-flex items-center font border border-stone-950 hover:border-stone-950 hover:scale-110 transition-transform py-1">
            <img src={download} alt="" className="h-6 mr-2" />
            <span>Resume</span>
          </button>
        </a>
        <span className="text-4xl font-thin">{dev2}</span>
        <div>
          {" "}
          {/*  Div About */}
          <hr
            className="my-4 border-gray-300"
            style={{ width: "70%", margin: "20px auto" }}
          />
          <h3 className="text-center text-md text-lg font-normal px-3">
            I'm a <span className="text-blue-700 ">curious</span> web developer
            who's <span className="underline">always</span> interested in
            expanding my knowledge,{" "}
            <span className="text-blue-700 ">learning</span> new things to apply
            it to projects or ideas.
          </h3>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "40%", margin: "20px auto" }}
          />
        </div>
        <div className="flex items-start px-3 ">
          {" "}
          {/* Div Experience*/}
          <img src={work} alt="work.png" />
          <div className="ml-3">
            <p className="text-left font-bold text-lg">Experience:</p>
            <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
              <p className="font-semibold text-left">
                Fullstack Teaching Assistant.{" "}
                <span className="font-thin">Oct 2023 - Dec 2023</span>{" "}
              </p>
              <br />
              <p className="text-left">
                Teaching Assistant (TA) for students at Henry Bootcamp.
              </p>
              <p className="text-left">- Main tasks:</p>

              <ul className="text-left px-2">
                <li>
                  • Coordinate a group of new joining students throughout the
                  whole bootcamp experience
                </li>
                <li>
                  • Guide students in the first steps of the course and clarify
                  their doubts
                </li>
                <li>
                  • Provide assistance in solving exercises and encourage group
                  teamwork (Pair Programming).
                </li>
                <li>• Suggest ideas to improve the Bootcamp processes.</li>
                <li>
                  • Promote collaboration and build community within the
                  students
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          className="my-4 border-gray-300"
          style={{ width: "10%", margin: "20px auto" }}
        />
        <div className="flex items-start px-3">
          {" "}
          {/* Div projects */}
          <img src={coding} alt="coding.png" className="h-8" />
          <div className="ml-3 text-left">
            <p className="text-left font-bold text-lg">Projects:</p>
            <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
              {" "}
              {/* Eng Partner*/}
              <p className="font-semibold">
                Eng Partner{" "}
                <span>
                  {" "}
                  <a
                    href="https://github.com/Maxxiandrade/EngPartnerV2"
                    target="_blank"
                  >
                    {" "}
                    <img src={github} alt="" className="h-6 mr-1" />
                  </a>
                </span>
              </p>
              <br />
              <div className="flex items-start">
                <ReactPlayer
                  url="https://youtu.be/4hDpkdE2vzM"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className='react-player'
                />
                <span className="px-3">
                  {" "}
                  <p className="ml-1">
                    An application that connects people worldwide, breaking
                    language barriers. It includes automatic translations and
                    topic-based chats to help users find people with similar
                    interests and make friends. Private chats facilitate
                    conversations with friends. Access to premium features is
                    available through VIP Membership. These features include
                    creating group chats, editing profiles, viewing profile
                    visitors, a report system, and an admin panel to manage and
                    act upon these reports.
                  </p>
                  <span>
                    <div className="flex justify-evenly ">
                      <img
                        src={javascript}
                        alt="javascript icon"
                        className="h-5 mr-1"
                      />
                      <img src={react} alt="react icon" className="h-5 mr-1" />
                      <img src={redux} alt="redux icon" className="h-5 mr-1" />
                      <img src={node} alt="node icon" className="h-5 mr-1" />
                      <img
                        src={express}
                        alt="express icon"
                        className="h-5 mr-1"
                      />
                      <img
                        src={firebase}
                        alt="firebase icon"
                        className="h-5 mr-1"
                      />
                    </div>
                  </span>
                </span>
              </div>
            </div>

            <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
            <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
              {" "}
              {/* Henry Dogs */}
              <p className="font-semibold">Henry Dogs
              <span>
                  {" "}
                  <a
                    href="https://github.com/Maxxiandrade/ProyectoHenry"
                    target="_blank"
                  >
                    {" "}
                    <img src={github} alt="" className="h-6 mr-1" />
                  </a>
                </span>
                </p>
              <br />
              <div className="flex items-start">
                <ReactPlayer
                  url="https://youtu.be/4hDpkdE2vzM"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                />
                <span className="px-3">
                  {" "}
                  <p className="ml-1">
                  I developed a Single Page Application (SPA) that showcases various dog breeds along with detailed information about each breed.
                   Additionally, users can create their own custom breed with personalized information and view it on the page.
                    <br />
                    This project marked my first independent endeavor, starting entirely from scratch. With just two months of bootcamp knowledge, I built this project. 
                    Implementing pagination posed a challenge as it wasn't part of the program. However, I conducted research and successfully implemented this feature. 
                    The page also offers sorting and filtering functionalities that work for both the API-provided dogs and the custom breeds stored in the database
                  </p>
                  <span>
                    <div className="flex justify-evenly">
                      <img
                        src={javascript}
                        alt="javascript icon"
                        className="h-5 mr-1"
                      />
                      <img src={react} alt="react icon" className="h-5 mr-1" />
                      <img src={redux} alt="redux icon" className="h-5 mr-1" />
                      <img src={node} alt="node icon" className="h-5 mr-1" />
                      <img
                        src={express}
                        alt="express icon"
                        className="h-5 mr-1"
                      />
                      <img
                        src={postgres}
                        alt="postgres icon"
                        className="h-5 mr-1"
                      />
                    </div>
                  </span>
                </span>
              </div>
            </div>
            <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
            <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
              {" "}
              {/* Rick & Morty */}
              <p className="font-semibold">Rick & Morty
              <span>
                  {" "}
                  <a
                    href="https://github.com/Maxxiandrade/ProyectoHenry"
                    target="_blank"
                  >
                    {" "}
                    <img src={github} alt="" className="h-6 mr-1" />
                  </a>
                </span>
                </p>
              <br />
              <div className="flex items-start">
                <ReactPlayer
                  url="https://youtu.be/4hDpkdE2vzM"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                />
                <span className="px-3">
                  {" "}
                  <p className="ml-1">
                  My first project served as an integration of the technologies learned during the bootcamp. Its objective was to merge various technologies into a single project.
                   <br />
                   It's a rather simple application that retrieves characters from the 'Rick and Morty' series, allowing users to search and view detailed information about any of the 600+ 
                   characters. On the backend, I fetched data from an API, developing routes, controllers, and handlers. On the frontend, I implemented rendering, controlled forms, sorting, 
                   and filtering. Additionally, I created a favorites system that integrates both the frontend and backend, enabling users to save desired character information into the database 
                   as a model.
                  </p>
                  <span>
                    <div className="flex justify-evenly">
                      <img
                        src={javascript}
                        alt="javascript icon"
                        className="h-5 mr-1"
                      />
                      <img src={react} alt="react icon" className="h-5 mr-1" />
                      <img src={redux} alt="redux icon" className="h-5 mr-1" />
                      <img src={node} alt="node icon" className="h-5 mr-1" />
                      <img
                        src={express}
                        alt="express icon"
                        className="h-5 mr-1"
                      />
                      <img
                        src={postgres}
                        alt="postgres icon"
                        className="h-5 mr-1"
                      />
                    </div>
                  </span>
                </span>
              </div>
            </div>
            <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
          <div> {/* Div Contact*/}
            <h2 className="flex justify-center text-3xl">
              Get in touch
            </h2>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column;
