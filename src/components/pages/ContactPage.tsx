import './ContactPage.css';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <h1 className="contact-title">Let's Chat!</h1>
      
      <div className="content-card">
        <p className="contact-intro">
          Want to connect? Collaborate? Find me down below...
        </p>

        <div className="contact-options">
          <a 
            href="mailto:eliza.clamor@gmail.com" 
            className="contact-card"
          >
            <span className="contact-icon">📧</span>
            <div className="contact-info">
              <h3>Email</h3>
              <p>eliza.clamor@gmail.com</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/eliza-clamor/" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">💼</span>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>

          <a 
            href="https://www.instagram.com/3L124" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">📸</span>
            <div className="contact-info">
              <h3>Instagram</h3>
              <p>@3L124</p>
            </div>
          </a>
        </div>

      </div>

      <footer className="contact-footer">
        Thanks for stopping by! → <a href="/home">Home</a>
      </footer>
    </main>
  );
}
