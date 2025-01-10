import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Projects = ({ isLight }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once when the element comes into view
    threshold: 0.1, // Activate when 10% of the element is visible
  });

  return (
    <section id="projects" className={`projects-section ${isLight ? 'bg-[#e3e2e2]' : 'bg-[#090909]'} transition-colors duration-500`}>
      <div className="container mx-auto py-5">
        <h2 className={`p-10 text-3xl font-bold mb-4 pb-5 ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500`}>
          My Projects
        </h2>
        <div className="flex projects-container px-10">
          {/* PBS Project Card with Fade-in Effect */}
          <Link href="https://pbs-web-stream-main-zedportugals-projects.vercel.app/?fbclid=IwAR3KjArKIcGsVEVhussmKVfzItY3gwdEqZ_LHrdFkEE0DbxXr4TMqm1hTd4" passHref>
            <div
              ref={ref}
              className={`project p-4 mb-4 rounded-3xl shadow-md border-2 border-white hover:border-[#38BDAE] ${
                isLight ? 'bg-[#e8e8e8] text-black' : 'bg-[#000000] text-white'
              } transition-colors duration-500 cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-700 ease-in-out`}
            >
              <h3 className="text-2xl font-semibold">PBS</h3>
              <p className="text-sm">
                The PBS Web Application is a dynamic and user-centric platform designed to enhance the digital radio streaming experience. Built with modern front-end technologies like Next.js and Tailwind CSS, the project focuses on delivering a seamless, responsive, and visually appealing interface for users who enjoy live radio broadcasts.
              </p>
            </div>
          </Link>
          {/* Repeat the above block for more projects if needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;