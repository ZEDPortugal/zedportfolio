import React, { useState } from 'react';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';

const App = () => {
  const [isLight, setIsLight] = useState(false);

  const handleToggle = () => {
    setIsLight(!isLight);
  };

  return (
    <div>
      <Skills isLight={isLight} handleToggle={handleToggle} />
      <About isLight={isLight} />
      <Projects isLight={isLight} />
    </div>
  );
};

export default App;