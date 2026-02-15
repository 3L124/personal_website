import styles from './HomePage.module.css';

const skills = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "SQL", category: "language" },
  { name: "VB", category: "language" },
  { name: "C", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "SQL Server", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "AWS", category: "cloud" },
  { name: "Git", category: "tool" },
  { name: "Azure", category: "tool" },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className="content-card">
        <h1 className={styles.nameFont}>Eliza Clamor</h1>
        <p className={styles.slogan}>Welcome into my headspace</p>

        <div className={styles.paragraphs}>
          <p>Scientist by degree. Kiwi by upbringing. Uni in the USA. Currently building a life in Milan.</p>
          <p>My path hasn't been linear — it's been iterative. </p>
          <p>I've moved many places, worked a handful of jobs and solved my way out of sticky situations. 
            When things feel uncertain, I build. Systems. Ideas. Skills. Sometimes entire websites in languages I don't quite speak yet (or move to a country like such).
            I'm most at home at the intersection of logic and curiosity, structure and exploration.</p>
          <p>A jack of all trades. Master of some. Always building the rest.</p>
        </div>
      </div>

      <section className={styles.skillsSection}>
        <h2 className={styles.slogan}>Skills & Tools</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="content-card">
        <div className={styles.paragraphs}>Engineering is what I do. This is who I am.</div>
        <div className={styles.instagramEmbed}>
          <iframe 
            src="https://www.instagram.com/p/DO2S8gZAVk8/embed" 
            width="400" 
            height="500" 
            frameBorder={0}
            scrolling="no" 
            allowTransparency={true}
            title="Instagram post"
          ></iframe>
        </div>
      </div>

      <footer className={styles.footer}>
        Go on, have a wander around...
      </footer>
    </main>
  );
}
