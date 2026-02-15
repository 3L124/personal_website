import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <h1 className="projects-title">Projects</h1>
      
      <section className="project-card featured content-card">
        <div className="project-badge">⭐ Featured</div>
        <h2 className="project-name">This Portfolio Website</h2>
        <p className="project-description">
          Yeah, I'm starting with the meta one. This website itself is a project! 
          Built from scratch because I wanted to prove to myself I could learn 
          something new.
        </p>
        <div className="project-tags">
          <span className="tag">React</span>
          <span className="tag">TypeScript</span>
          <span className="tag">Vite</span>
          <span className="tag">CSS Modules</span>
        </div>
        <div className="project-links">
          <span className="coming-soon">GitHub link coming soon...</span>
        </div>
      </section>

      <section className="more-coming content-card">
        <div className="more-content">
          <span className="more-emoji">☕</span>
          <p>More projects brewing...</p>
          <p className="more-subtitle">
            I literally just lost access to my GitHub so I'm rebuilding 
            everything from scratch. Stay tuned for updates!
          </p>
        </div>
      </section>

      <footer className="projects-footer">
        Got an idea? Want to collaborate? → <a href="/contact">Let's chat!</a>
      </footer>
    </main>
  );
}
