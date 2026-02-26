import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);
  
  return (
    <div className="container">
      <button id="toggleSkills" onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>
      
      {visible && (
        <section className="card" id="skillsSection"> 
          <h2>Skills</h2>
          <h3>Personal Skills</h3>
          <ul>
            <li>Cooking</li>
            <li>Driving</li>
            <li>Playing Basketball</li>
          </ul>
        </section>
      )}
    </div>
  );
}

export default Skills;