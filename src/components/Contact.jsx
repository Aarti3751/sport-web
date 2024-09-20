
import './Contact.css';

const Contact = () => {
  return (
    <>
      <header className="contact-header">
        <h1 className='h'>Contact Sports Gear Hub</h1>
        <p>Get in touch with us for inquiries, orders, or support</p>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-box">
          <div className="info-item">
            <h3>Email Us</h3>
            <p><a href="mailto:support@sportsgearhub.com">support@sportsgearhub.com</a></p>
          </div>
          <div className="info-item">
            <h3>Call Us</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="info-item">
            <h3>Visit Our Store</h3>
            <p>123 Sports Avenue, City Name, Country</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form action="#" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder="Subject of your message" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write your message here" rows="6" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

    </>
  );
}

export default Contact;
