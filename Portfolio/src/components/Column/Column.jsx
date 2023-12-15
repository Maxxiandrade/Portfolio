import React from "react";
import Maxi from "../../assets/Maxi.jpeg";
import download from "../../assets/download.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import work from "../../assets/work.png";
import coding from "../../assets/coding.png";
import cv from "../../doc/cv.pdf";
import ReactPlayer from "react-player/youtube";

const Column = () => {
  const vidURL = "https://youtu.be/qs2n2lC8YkA";
  const dev = "<";
  const dev2 = "/>";
  return (
    <>
      <div className="bg-gray-200 screenw-full screenh-full   justify-center rounded-xl shadow-2xl shadow-slate-950">
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
          <img src={coding} alt="coding.png" className="h-8" />
          <div className="ml-3 text-left">
            <p className="text-left font-bold text-lg">Projects:</p>
            <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
              <p className="font-semibold">Eng Partner</p>
              <p className="ml-1">
                An application that connects people worldwide, breaking language
                barriers. It includes automatic translations and topic-based
                chats to help users find people with similar interests and make
                friends. Private chats facilitate conversations with friends.
                Access to premium features is available through VIP Membership.
                These features include creating group chats, editing profiles,
                viewing profile visitors, a report system, and an admin panel to
                manage and act upon these reports.
              </p>
              <br />
              <div className="flex items-start">
              <ReactPlayer url='https://youtu.be/4hDpkdE2vzM'
              width={'500px'}
              height={'300px'}
              controls={true}
              volume={0.3} />
              <span className="px-3">Hola</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column;
