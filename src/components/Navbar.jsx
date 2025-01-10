import React, { useState, useCallback } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = ({ isLight, handleToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth and slow scroll to section with debounce
  const scrollToSection = useCallback((id) => {
    const section = document.querySelector(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: top - (window.innerHeight / 2 - section.offsetHeight / 2), // Center the section vertically
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close the mobile menu after navigation
    }
  }, []);

  return (
    <nav className={`animate-fade-down animate-once animate-duration-[200ms] flex w-full h-16 shadow-xl fixed top-0 left-0 z-10 ${isLight ? 'bg-gray-100' : 'bg-black'} transition-colors duration-500`}>
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className={`text-4xl font-mono font-bold ${isLight ? 'text-black' : 'text-[#40e1cf]'} hover:text-white ease-in-out duration-1000`}>Z|E|D</div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex font-mono">
          <ul className={`flex ${isLight ? 'text-black' : 'text-white'}`}>
            <li
              onClick={() => scrollToSection('#home')}
              className="ml-10 uppercase hover:text-[#38BDAE] ease-in-out duration-200 text-xl cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection('#skills')}
              className="ml-10 uppercase hover:text-[#38BDAE] ease-in-out duration-200 text-xl cursor-pointer"
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection('#about')}
              className="ml-10 uppercase hover:text-[#38BDAE] ease-in-out duration-200 text-xl cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection('#projects')}
              className="ml-10 uppercase hover:text-[#38BDAE] ease-in-out duration-200 text-xl cursor-pointer"
            >
              Projects
            </li>
          </ul>
        </div>
        <a 
          href="/Joe-Marten-Zedric-Portugal_Resume.pdf" 
          download="Joe-Marten-Zedric-Portugal_Resume.pdf"
          className="hidden xl:flex text-white font-mono uppercase hover:bg-black border-2 hover:text-[#38BDAE] hover:border-[#38BDAE] hover:rounded-2xl border-white ease-in-out duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Resume
        </a>
        
        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="xl:hidden cursor-pointer text-white" aria-label="Toggle menu">
          {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`xl:hidden fixed left-0 top-0 w-[70%] h-screen bg-[#0d0d0d] opacity-90 p-10 ease-in-out duration-500 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex w-full items-center justify-end text-white">
          <div onClick={handleNav} className="cursor-pointer" aria-label="Close menu">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="py-4 flex flex-col text-white font-mono">
          <ul>
            <li onClick={() => setMenuOpen(false)} className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setMenuOpen(false)} className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer">
              <a 
                href="/Joe-Marten-Zedric-Portugal_Resume.pdf" 
                download="Joe-Marten-Zedric-Portugal_Resume.pdf"
                className="text-white font-mono uppercase hover:bg-black border-2 hover:text-[#38BDAE] hover:border-[#38BDAE] hover:rounded-2xl border-white ease-in-out duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;