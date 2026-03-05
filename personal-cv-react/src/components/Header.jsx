import profilePhoto from '../assets/profile.jpg';

function Header() {
  return (
    <div className="container">
        <section className="card">  
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
            src={profilePhoto}
            alt="Jayson Rey Digang profile photo" 
            width="200" 
            height="200" 
            />
            <h1>Jayson Rey Digang</h1>
            <p>College IT Student</p>
            
        </header>
        </section>
    </div>
  );
}

export default Header;