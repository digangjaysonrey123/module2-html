import { useState } from "react";
import Card from "./Card";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Invalid! Please fill in all fields.");
      return;
    }

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch(err => {
        alert("Something went wrong. Please try again.");
        console.error(err);
      });
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
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" id="submitBtn">Send</button>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default Contact;