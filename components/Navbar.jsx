import React from "react";
import { useInView } from "react-intersection-observer";
import { FaSun, FaMoon, FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import ChatBot from './ChatBot.js';


const Skills = ({ isLight, handleToggle }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure the animation only triggers once
    threshold: 0.1, // Activate when 10% of the section is visible
  });

  return (
    <section
      ref={ref}
      id="skills"
      className={`relative font-mono ${
        isLight ? "bg-[#d9d9d9]" : "bg-[#0d0d0d]"
      } transition-colors duration-500`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isLight ? "bg-[#f9f9f9]" : "bg-[#131313]"
        } z-[-1] filter brightness-[50%] transition-colors duration-500`}
      ></div>

      <div className="relative flex flex-col justify-center items-center mx-auto max-w-7xl p-4 sm:p-8 md:p-12">
        {/* Dark/Light Mode Toggle Button with Icons */}
        <div className="day-night absolute top-5 right-5 sm:top-8 sm:right-10">
          <button
            onClick={handleToggle}
            className={`p-2 rounded-full font-semibold shadow-md hover:bg-slate-600 duration-500 ${
              isLight ? "bg-[#fdd835] text-white" : "bg-[#060606] text-white"
            }`}
          >
            {isLight ? (
              <FaSun className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </button>
        </div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl font-semibold uppercase text-center mb-8 ${
            isLight ? "text-[#333333]" : "text-[#ffffff]"
          } transition-colors duration-500`}
        >
          Skills
        </h1>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10">
          {[
            { name: "HTML5", icon: <FaHtml5 className="w-10 h-10 mx-auto" /> },
            { name: "CSS3", icon: <FaCss3 className="w-10 h-10 mx-auto" /> },
            { name: "JavaScript", icon: <FaJs className="w-10 h-10 mx-auto" /> },
            { name: "React", icon: <FaReact className="w-10 h-10 mx-auto" /> },
            { name: "Next.js", icon: <RiNextjsFill className="w-10 h-10 mx-auto" /> },
            {
              name: "Tailwind CSS",
              icon: <RiTailwindCssFill className="w-10 h-10 mx-auto" />,
            },
          ].map((skill, index) => (
            <div
              key={index}
              className={`w-34 hover:border-[#38BDAE] border-2 rounded-3xl p-6 transform transition-all duration-500 ${
                isLight ? "bg-white border-[#333333] text-[#333333]" : "bg-[#1a1a1a] border-[#ffffff] text-white"
              } shadow-md text-center opacity-0 scale-95 transition-colors duration-500 ${
                inView ? "animate-fade opacity-100 scale-100" : ""
              }`}
            >
              <div
                className={`${
                  isLight ? "filter brightness-0" : "filter brightness-100"
                } transition-all duration-500`}
              >
                {skill.icon}
              </div>
              <p
                className={`text-center text-xl font-semibold mt-4 ${
                  isLight ? "text-[#333333]" : "text-[#ffffff]"
                } transition-colors duration-500`}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
