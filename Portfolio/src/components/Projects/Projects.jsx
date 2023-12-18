import React from 'react'
import github from "../../assets/github.svg";
import coding from "../../assets/coding.png";
import ReactPlayer from "react-player/youtube";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import react from "../../assets/react.svg";
import firebase from "../../assets/firebase.png";
import javascript from "../../assets/javascript.svg";
import redux from "../../assets/redux.png";
import postgres from "../../assets/postgres.png";

const Projects = () => {
  return (
    <>
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
              <div className="flex items-start ">
                <div>

                <ReactPlayer
                  url="https://youtu.be/4hDpkdE2vzM"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className='react-player'
                  />
                  </div>
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
          </div>
        </div>
    </>
  )
}

export default Projects