import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ isLight }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Smooth and slow scroll to section
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: top - (window.innerHeight / 2 - section.offsetHeight / 2), // Center the section vertically
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close the mobile menu after navigation
    }
  };

  return (
    <nav className={`animate-fade-down animate-once animate-duration-[200ms] flex w-full h-16 shadow-xl fixed top-0 left-0 z-10 opacity-50 ${isLight ? 'bg-white' : 'bg-black'}`}>
      <div className={`flex justify-between items-center h-full w-full px-4 2xl:px-16 opacity-80 hover:opacity-100 ease-in-out duration-200 ${isLight ? 'bg-white' : 'bg-black'}`}>
        <div className={`text-[#40e1cf] hover:text-${isLight ? 'black' : 'white'} ease-in-out duration-1000 font-mono font-bold text-4xl`}>Z|E|D</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex font-mono">
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
          className={`hidden md:flex ${isLight ? 'text-black' : 'text-white'} font-mono uppercase hover:bg-${isLight ? 'white' : 'black'} border-2 hover:text-[#38BDAE] hover:border-[#38BDAE] hover:rounded-2xl border-${isLight ? 'black' : 'white'} ease-in-out duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
          Download Resume
        </a>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className={`md:hidden cursor-pointer ${isLight ? 'text-black' : 'text-white'}`} aria-label="Toggle menu">
          <AiOutlineMenu size={25} />
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={
            menuOpen
              ? `fixed left-0 top-0 w-[70%] md:hidden h-screen ${isLight ? 'bg-[#ffffff]' : 'bg-[#000000]'} p-10 ease-in duration-500`
              : 'fixed left-[-100%] top-0 p-10 h-screen ease-out duration-500'
          }
        >
          <div className={`flex w-full items-center justify-end ${isLight ? 'text-black' : 'text-white'}`}>
            <div onClick={handleNav} className="cursor-pointer" aria-label="Close menu">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className={`py-4 flex flex-col ${isLight ? 'text-black' : 'text-white'} font-mono`}>
            <ul>
              <li
                onClick={() => scrollToSection('#home')}
                className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection('#skills')}
                className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer"
              >
                Skills
              </li>
              <li
                onClick={() => scrollToSection('#about')}
                className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer"
              >
                About
              </li>
              <li
                onClick={() => scrollToSection('#projects')}
                className="py-4 text-xl uppercase hover:text-[#38BDAE] ease-in-out duration-200 cursor-pointer"
              >
                Projects
              </li>
              <li className="py-4 text-xl uppercase cursor-pointer">
                <a
                  href="/Joe-Marten-Zedric-Portugal_Resume.pdf"
                  download="Joe-Marten-Zedric-Portugal_Resume.pdf"
                  className={`font-mono uppercase ${isLight ? 'bg-white text-black border-black hover:bg-black hover:text-white' : 'bg-black text-white border-white hover:bg-white hover:text-black'} border-2 ease-in-out duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;