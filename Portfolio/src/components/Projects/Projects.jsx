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
import snake from "../../../public/rxaction.gif";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import external from "../../assets/external.svg";
import typescript from "../../assets/typescript.png";

const Projects = () => {
  return (
    <>
      <div className="flex items-start px-3">
        {" "}
        {/* Div projects */}
        <img src={coding} alt="coding.png" className="h-8" />
        <div className="ml-3 text-left">
          <p className="text-left font-bold text-lg">Projects:</p>

          {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
          <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
            {" "}
            {/* Planify */} {/* Planify*/}
            <p className="font-semibold">
              Easy Tailwind{" "}
              <span>
                {" "}
                <div className="flex">
                  <a
                    href="https://github.com/Maxxiandrade/easytailwind"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={github}
                      alt=""
                      className="h-6 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                  <a href="https://easytailwind-xi.vercel.app" target="_blank">
                    <img
                      src={external}
                      alt=""
                      className="h-7 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                </div>
              </span>
            </p>
            <br />
            <div className="flex flex-col-reverse lg:flex-row items-center ">
              {/* Video container */}
              <div className="md:w-5/12 md:max-w h-64">
                <ReactPlayer
                  url="https://youtu.be/lEzokGxQ_e8"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className="react-player"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-5">
                <span className="px-3">
                  {" "}
                  <p>Easy Tailwind is a tool that created in order to speed up the creation of different Tailwind CSS components through a customization panel, and with a real-time preview! </p>
                  <span>
                    <div className="flex justify-evenly ">
                      <img src={react} alt="react icon" className="h-5 mr-1" />
                      <img
                        src={typescript}
                        alt="typescript icon"
                        className="h-5 mr-1 rounded-sm"
                      />
                     
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />

          {/*------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
          <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
            {" "}
            {/* Planify */} {/* Planify*/}
            <p className="font-semibold">
              Planify{" "}
              <span>
                {" "}
                <div className="flex">
                  <a
                    href="https://github.com/Maxxiandrade/planify"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={github}
                      alt=""
                      className="h-6 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                  <a href="https://planify-seven.vercel.app" target="_blank">
                    <img
                      src={external}
                      alt=""
                      className="h-7 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                </div>
              </span>
            </p>
            <br />
            <div className="flex flex-col-reverse lg:flex-row items-center ">
              {/* Video container */}
              <div className="md:w-5/12 md:max-w h-64">
                <ReactPlayer
                  url="https://www.youtube.com/shorts/Vpwh0HxNiEo"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className="react-player"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-5">
                <span className="px-3">
                  {" "}
                  <p>Planify is an intuitive frontend application designed to streamline appointment scheduling at spas. With a user-friendly interface, 
                    Planify allows users to schedule their spa appointments efficiently and conveniently.
                     Features such as viewing available time slots and instant appointment confirmation make managing time and personal schedules a breeze. </p>
                  <span>
                    <div className="flex justify-evenly ">
                      <img src={react} alt="react icon" className="h-5 mr-1" />
                      <img
                        src={typescript}
                        alt="typescript icon"
                        className="h-5 mr-1 rounded-sm"
                      />
                      <img src={redux} alt="css icon" className="h-5 mr-1" />
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />

          {/*------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
            {" "}
            {/* cloudKast */} {/* cloudKast*/}
            <p className="font-semibold">
              cloudKast{" "}
              <span>
                {" "}
                <div className="flex">
                  <a
                    href="https://github.com/Maxxiandrade/cloudkast"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={github}
                      alt=""
                      className="h-6 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                  <a
                    href="https://cloudkast.vercel.app/landing"
                    target="_blank"
                  >
                    <img
                      src={external}
                      alt=""
                      className="h-7 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                </div>
              </span>
            </p>
            <div className="flex flex-col-reverse lg:flex-row items-center ">
              {/* Video container */}
              <div className="md:w-5/12 md:max-w h-64">
                <ReactPlayer
                  url="https://youtu.be/_czHE4f1Zao"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className="react-player"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-5">
                <span className="px-3">
                  {" "}
                  <p className="ml-1">
                    cloudKast is a user-friendly weather web application
                    designed to provide you with up-to-date weather information
                    for any city in the world.
                  </p>
                  <p className="font-semibold">Key Features:</p>
                  <p>
                    &bull; Current Weather Data: Obtain accurate and real-time
                    weather updates for any city worldwide. From temperature
                    readings to wind speeds.
                    <br />
                    &bull; Customizable Temperature Units: Tailor your weather
                    experience by choosing between Celsius and Fahrenheit
                    temperature units.
                    <br />
                    &bull; Hourly Weather Schedule: Stay informed about the
                    day's weather forecast with an hourly breakdown of climate
                    conditions.
                    <br />
                    &bull; Astro Information: Explore more than just weather
                    data with cloudKast's astro information feature. Discover
                    the sunrise and sunset times, moon phases, and other
                    celestial events relevant to your location.
                  </p>
                  <span>
                    <div className="flex justify-evenly ">
                      <img src={react} alt="react icon" className="h-5 mr-1" />
                      <img
                        src={typescript}
                        alt="typescript icon"
                        className="h-5 mr-1 rounded-sm"
                      />
                      <img src={css} alt="css icon" className="h-5 mr-1" />
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
            {" "}
            {/* AthleteX */} {/* AthleteX*/}
            <p className="font-semibold">
              AthletiX{" "}
              <span>
                {" "}
                <div className="flex">
                  <a
                    href="https://github.com/Maxxiandrade/AthleteX"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={github}
                      alt=""
                      className="h-6 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                  <a href="https://athlete-x-rho.vercel.app/" target="_blank">
                    <img
                      src={external}
                      alt=""
                      className="h-7 mr-1 hover:scale-110 transition-transform "
                    />
                  </a>
                </div>
              </span>
            </p>
            <br />
            <div className="flex flex-col-reverse lg:flex-row items-center ">
              {/* Video container */}
              <div className="md:w-5/12 md:max-w h-64">
                <ReactPlayer
                  url="https://youtu.be/PUB4x_phtE0"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className="react-player"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-5">
                <span className="px-3">
                  {" "}
                  <p className="ml-1">
                    Athletix is an exciting e-commerce project that caters to
                    athletes and sports enthusiasts alike, offering a
                    comprehensive range of high-quality sport gear and
                    equipment. With a focus on providing top-notch products from
                    renowned brands, Athletix aims to be the go-to destination
                    for athletes of all levels looking to elevate their
                    performance and achieve their fitness goals.
                  </p>
                  <p>
                    Through our user-friendly platform, customers can easily
                    browse and purchase athletic apparel, equipment, and
                    accessories tailored to their specific sport or activity.
                    With detailed product descriptions, Athletix ensures that
                    shoppers can make informed decisions while shopping online.
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
          </div>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
         
          <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
            {" "}
            {/* Eng Partner */} {/* Eng Partner*/}
            <p className="font-semibold">
              Eng Partner{" "}
              <span>
                {" "}
                <a
                  href="https://github.com/Maxxiandrade/EngPartnerV2"
                  target="_blank"
                >
                  {" "}
                  <div className="flex">
                    <img
                      src={github}
                      alt=""
                      className="h-6 mr-1 hover:scale-110 transition-transform "
                    />
                    <a
                      href="https://engpartner-aa0ce.firebaseapp.com/"
                      target="_blank"
                    >
                      <img
                        src={external}
                        alt=""
                        className="h-7 mr-1 hover:scale-110 transition-transform "
                      />
                    </a>
                  </div>
                </a>
              </span>
            </p>
            <br />
            <div className="flex flex-col-reverse lg:flex-row items-center ">
              {/* Video container */}
              <div className="md:w-5/12 md:max-w h-64">
                <ReactPlayer
                  url="https://youtu.be/4hDpkdE2vzM"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className="react-player"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-5">
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
          </div>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
            {" "}
            {/*¨Henry Dogs */} {/* Henry Dogs */}
            <p className="font-semibold">
              Henry Dogs
              <span>
                {" "}
                <a
                  href="https://github.com/Maxxiandrade/ProyectoHenry"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={github}
                    alt=""
                    className="h-6 mr-1 hover:scale-110 transition-transform"
                  />
                </a>
              </span>
            </p>
            <div className="flex flex-col-reverse lg:flex-row items-center ">
              {/* Video container */}
              <div className="md:w-5/12 md:max-w h-64">
                <ReactPlayer
                  url="https://youtu.be/MuDt6u0JVlo"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className="react-player"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-5">
                <span className="px-3">
                  {" "}
                  <p className="ml-1">
                    I developed a Single Page Application (SPA) that showcases
                    various dog breeds along with detailed information about
                    each breed. Additionally, users can create their own custom
                    breed with personalized information and view it on the page.
                    <br />
                    This project marked my first independent endeavor, starting
                    entirely from scratch. With just two months of bootcamp
                    knowledge, I built this project. Implementing pagination
                    posed a challenge as it wasn't part of the program. However,
                    I conducted research and successfully implemented this
                    feature. The page also offers sorting and filtering
                    functionalities that work for both the API-provided dogs and
                    the custom breeds stored in the database
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
                        src={postgres}
                        alt="firebase icon"
                        className="h-5 mr-1"
                      />
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
            {" "}
            {/* Rick & Morty */} {/* Rick & Morty */}
            <p className="font-semibold">
              Rick & Morty
              <span> </span>
            </p>
            <div className="flex flex-col-reverse lg:flex-row items-center ">
              {/* Video container */}
              <div className="md:w-5/12 md:max-w h-64">
                <ReactPlayer
                  url="https://youtu.be/Vv8e4urdZ_U"
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  volume={0.3}
                  className="react-player"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-5">
                <span className="px-3">
                  {" "}
                  <p className="ml-1">
                    My first project served as an integration of the
                    technologies learned during the bootcamp. Its objective was
                    to merge various technologies into a single project.
                    <br />
                    It's a rather simple application that retrieves characters
                    from the 'Rick and Morty' series, allowing users to search
                    and view detailed information about any of the 600+
                    characters. On the backend, I fetched data from an API,
                    developing routes, controllers, and handlers. On the
                    frontend, I implemented rendering, controlled forms,
                    sorting, and filtering. Additionally, I created a favorites
                    system that integrates both the frontend and backend,
                    enabling users to save desired character information into
                    the database as a model.
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
                        src={postgres}
                        alt="firebase icon"
                        className="h-5 mr-1"
                      />
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "5%", margin: "20px auto" }}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
