function Contact({ handleSubmit }) {
  return (
    <div className="container">
        <section className="card">
        <h2>Contact Me</h2>
        
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
            <input type="text" id="name" placeholder="Name" />
            <input type="email" id="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" id="submitBtn">Send</button>
            </form>
        </div>
        </section>
    </div>
  );
}

export default Contact;