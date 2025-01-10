import React, { useState } from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import ChatBot from './chatbot'; // Ensure consistent casing

const App = () => {
  const [isLight, setIsLight] = useState(false);

  const handleToggle = () => {
    setIsLight(!isLight);
  };

  return (
    <div>
      <Navbar isLight={isLight} />
      <Skills isLight={isLight} handleToggle={handleToggle} />
      <About isLight={isLight} />
      <Projects isLight={isLight} />
      <ChatBot isLight={isLight} />
    </div>
  );
};

export default App;