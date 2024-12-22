import "./Contact.css";

function Contact() {
  console.log("Function Contact");
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <p>Have questions about Rick and Morty? Reach out to us!</p>
        <div className="contact-info">
          <p>Email: info@everythingincludedinc.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Portal Street, Dimension C-137</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
