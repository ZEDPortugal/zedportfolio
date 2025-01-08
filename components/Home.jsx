import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-end dev", "Web designer", "Freelancer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta - 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section id="home" className="relative h-screen">
      {/* Video background */}
  
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1] filter brightness-[30%]"
    src="/video/bg.mp4"
    autoPlay
    loop
    muted
  ></video>

      <Navbar />

      <div className=" flex items-center p-[2%] text-white h-full">
        {/* Hidden on mobile */}
        <div className="animate-fade-right animate-once animate-duration-300 hidden md:block items-center hover:text-[#c7c7c7]">
          <a
            href="https://www.linkedin.com/in/joe-marten-zedric-portugal-b266ab296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin
              size={40}
              className="animate-fade animate-once animate-duration-[2000ms] mt-5 rounded-full hover:text-[#0077b5] hover:border-4 hover:border-[#0077b5] ease-in-out duration-200 cursor-pointer"
            />
          </a>
          <a
            href="https://github.com/ZEDPortugal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub
              size={40}
              className="animate-fade animate-once animate-duration-[1500ms] mt-5 rounded-full hover:text-[#ffffff] hover:border-4 hover:border-[#ffffff] ease-in-out duration-200 cursor-pointer"
            />
          </a>
          <a href="mailto:jmportugal02@gmail.com" className="cursor-pointer">
            <AiOutlineMail
              size={40}
              className="animate-fade animate-once animate-duration-[1000ms] mt-5 rounded-full hover:text-[#FF0000] hover:border-4 hover:border-[#FF0000] ease-in-out duration-200 cursor-pointer"
            />
          </a>
        </div>

        <div className="max-w-[600px] p-[4%]">
          {/* Hidden on desktop */}
          <img
            className="xl:hidden border-white border-2 bg-white relative rounded-full size-24 mt-20 mb-5 "
            src="/image/profile.png"
            alt="Profile"
          />
        {/* Main Header */}
        <h1 className="animate-fade animate-once text-[56px] font-semibold uppercase text-[#F5F5F5]">
            Zedric Portugal
          </h1> 
          
          {/* Rotating Text */}
          <h3 className="text-[30px] font-semibold text-[#38BDAE]">{text}|</h3>
          
          {/* Location Section */}
          <div className="animate-fade-up animate-once animate-duration-1000 flex items-center mt-2 border-t-2 border-[#38BDAE] pt-5">
            <div className="flex items-center hover:text-[#BFBFBF] ease-in-out duration-300">
              <FaMapMarkerAlt size={20} className="cursor-pointer text-[#38BDAE] mr-2" />
              <a
                href="https://www.google.com/maps/place/metro+manila/data=!4m2!3m1!1s0x3397c8d26026386d:0x5fed23daac9278d0?sa=X&ved=1t:155783&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Metro Manila, Philippines</p>
              </a>
            </div>
          </div>
          {/* Hidden on desktop */}
          <div className="md:hidden flex items-center mt-20 ">
            <a
              href="https://www.linkedin.com/in/joe-marten-zedric-portugal-b266ab296/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin
                size={40}
                className="animate-fade animate-once animate-duration-1000 mr-1 rounded-full hover:text-[#0077b5] hover:border-4 hover:border-[#0077b5] ease-in-out duration-200 cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/ZEDPortugal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub
                size={40}
                className="animate-fade animate-once animate-duration-[1500ms] mx-1 rounded-full hover:text-[#ffffff] hover:border-4 hover:border-[#ffffff] ease-in-out duration-200 cursor-pointer"
              />
            </a>
            <a href="mailto:jmportugal02@gmail.com" className="cursor-pointer">
              <AiOutlineMail
                size={40}
                className="animate-fade animate-once animate-duration-[2000ms] mx-1 rounded-full hover:text-[#FF0000] hover:border-4 hover:border-[#FF0000] ease-in-out duration-200 cursor-pointer"
              />
            </a>
          </div>


                
        
        </div>
        <img
          className="animate-pulse animate-once animate-duration-[2000ms] hidden xl:flex relative hover:border-[#38BDAE] border-2 hover:border-4 ease-in-out hover:rounded-full hover:size-80 duration-300 border-[#f1f3f4]  left-64 rounded-r- rounded-b-full size-60"
          src="/image/profile.png"
          alt="Profile"
        />
      </div>
      
    </section>
  );
};

export default Home;
