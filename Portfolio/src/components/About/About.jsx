
import Maxi from "../../assets/Maxi.jpeg";
import download from "../../assets/download.svg";
import linkedin from "../../assets/linkedin.svg";
import cv from "../../doc/cv.pdf";
import github from "../../assets/github.svg";
const About = () => {
    const dev = "<";
    const dev2 = "/>";

  return (
    <div>
        {" "}
        {/* Div principal */}
        <br />
        <img
  src={Maxi}
  alt=""
  className="rounded-full h-64 w-64 shadow-2xl object-cover ml-9 transition-transform duration-500 ease-in-out hover:scale-110"
/>
        <h1 className="font-thin text-4xl"> Maximiliano Andrade.</h1>
        <h2 className="underline text-4xl">
          Fullstack <span className="text-blue-900 font-mono">developer.</span>
        </h2>
        <br className="my-4 border-gray-300" />
        <a
          href="https://www.linkedin.com/in/maximiliano-andrade-8ab0b6213/"
          target="_blank"
          rel='noreferrer'
        >
          <span className="text-4xl font-thin">{dev}</span>

          <button className="rounded-md text-stone-950 text-sm px-2 inline-flex items-center font  hover:scale-110 transition-transform py-1">
            <img src={linkedin} alt="" className="h-7 mr-2 " />
          </button>
        </a>
        <a href="https://github.com/Maxxiandrade" target="_blank" rel='noreferrer'>
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
             <span className="text-blue-700 ">Curious</span> web developer
            who&apos;s <span className="underline">always</span> interested in
            expanding my knowledge,{" "}
            <span className="text-blue-700 ">learning</span> new things to apply
            it to projects or ideas.
          </h3>
          <hr
            className="my-4 border-gray-300"
            style={{ width: "40%", margin: "20px auto" }}
          />
        </div>
    </div>
  )
}

export default About