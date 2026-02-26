import { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        style={{ margin: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
      
      <h1>My Personal Online CV</h1>
      
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;