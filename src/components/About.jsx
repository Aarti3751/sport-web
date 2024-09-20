
import './About.css';
import im from '../about-profile.png'

function About() {
  return (
    <div className="about-container">
      <h1>About Our Sports Store</h1>
      
      
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-quality sports equipment, apparel, and footwear that inspire athletes to reach their full potential. We are committed to delivering excellence, innovation, and superior customer service.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading global sports brand, empowering athletes of all levels to excel in their sports while promoting health, fitness, and an active lifestyle worldwide.
        </p>
      </section>
    
      <section className="founder-info">
        <h2>Founder  Jake Ryder</h2>
        <img 
          src={im}  
          alt="Founder Jake Ryder" 
          className="founder-photo"
        />
        <p>
          Jake Ryder, a former professional athlete, founded this store with a passion for helping others achieve their sports goals. With years of experience in the field and a deep love for all things sports, Jake has dedicated himself to building a brand that offers athletes the tools they need to succeed.
        </p>
      </section>
    </div>
  );
}

export default About;
