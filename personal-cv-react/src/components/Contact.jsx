import { useState } from "react";
import Card from "./Card";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Invalid! Please fill in all fields.");
      return;
    }
    alert(`Thank you ${name}!`);
  }

  return (
    <div className="container">
      <Card title="Contact Me">
        <div>
          <h3>Connect With Me</h3>
          <ul>
            <li>Phone: 09161439796</li>
            <li>
              <a href="mailto:digang.jaysonrey@gmail.com">
                Email: digang.jaysonrey@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/jayson.digang.784858" 
                title="Visit my Facebook profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Profile
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea placeholder="Message"></textarea>
            <button type="submit" id="submitBtn">Send</button>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default Contact;