import React, { useState } from 'react';

import Skills from './src/components/Skills.jsx';
import Navbar from './src/components/Navbar.jsx';
import About from './src/components/About.jsx';
import Projects from './src/components/Projects.jsx';
import Home from './src/components/Home.jsx';
import ChatBot from './src/components/ChatBot.jsx';

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