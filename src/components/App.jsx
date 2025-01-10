import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';
import Home from '../components/Home';
import ChatBot from '../components/ChatBot';

const App = () => {
  const [isLight, setIsLight] = useState(false);

  const handleToggle = () => {
    setIsLight(!isLight);
  };

  return (
    <div>
      <Navbar isLight={isLight} handleToggle={handleToggle} />
      <Home isLight={isLight} handleToggle={handleToggle} />
      <Skills isLight={isLight} handleToggle={handleToggle} />
      <About isLight={isLight} />
      <Projects isLight={isLight} />
      <ChatBot isLight={isLight} />
    </div>
  );
};

export default App;