import { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

const education = [
  {
    year: "2023",
    program: "BS Information Technology",
    school: "University of Science and Technology of Southern Philippines"
  },
  {
    year: "2021",
    program: "Senior High School",
    school: "Liceo de Cagayan University"
  },
  {
    year: "2019",
    program: "High School",
    school: "Lapasan National High School"
  },
  {
    year: "2013",
    program: "Elementary",
    school: "Camaman-an Elementary School"
  }
];

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
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
      <ContactList />
    </div>
  );
}

export default App;