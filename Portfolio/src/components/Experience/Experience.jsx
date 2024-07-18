import React from 'react'
import work from "../../assets/work.png";
const Experience = () => {
  return (
    <>
    <div className="flex items-start px-3 ">
          {" "}
          {/* Div Experience*/}
          <img src={work} alt="work.png" />
          <div className="ml-3">
            <p className="text-left font-bold text-lg">Experience:</p>
            <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
              <p className="font-semibold text-left">
                -AI Training.{" "}
                <span className="font-thin">Jan. 2024 - Jun. 2024</span>{" "}
              </p>
             
              <p className="text-left">
                AI Training at Scale AI.
              </p>
              <br />
              <p className="text-left">- Main tasks:</p>

              <ul className="text-left px-2">
                <li>
                  • Utilize skills in React, JavaScript, and other technologies to train artificial intelligence systems.
                </li>
                <li>
                  • Correct errors, debug code, and enhance the efficiency of the AI system to ensure its quality and accuracy.
                </li>
                <li>
                  • Contribute to ensuring the quality and accuracy of AI training to enhance the end-user experience.
                </li>
              </ul>
            </div>
            <br />
            <div className="transition duration-500 ease-in-out transform hover:translate-x-5 opacity-200">
              <p className="font-semibold text-left">
                -Fullstack Teaching Assistant.{" "}
                <span className="font-thin">Oct. 2023 - Dec. 2023</span>{" "}
              </p>
              
              <p className="text-left">
                Teaching Assistant (TA) for students at Henry Bootcamp.
              </p>
              <br />
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
    </>
  )
}

export default Experience