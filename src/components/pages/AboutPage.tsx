import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>About Me</h1>
      
      <section className={`${styles.section} content-card`}>
        <h2 className={styles.sectionTitle}>📌 The Basics</h2>
        <p className={styles.text}>
          I'm a Kiwi, born and raised, with Filipino roots. 
          My mum works in telecommunications, which meant our house 
          was always full of new gadgets and conversations about how 
          things connected behind the scenes.
        </p>

        <p className={styles.text}>
          I had my first phone at three (yes, a Nokia brick), 
          and by six I thought my pink Motorola flip phone made me 
          wildly important. More than the novelty, though, I was 
          fascinated by how systems worked — how devices communicated, 
          how invisible signals turned into something tangible.
        </p>

        <p className={styles.text}>
          By high school, choosing programming as an elective felt 
          inevitable. I didn't just want to use technology — 
          I wanted to understand it.
        </p>
      </section>

      <section className={`${styles.section} content-card`}>
        <h2 className={styles.sectionTitle}>🎾 On the Court</h2>
        <p className={styles.text}>
          Tennis shaped my discipline long before tech shaped my career.
          I picked up a racket at three — mostly dragging it behind me 
          because it was bigger than I was.
        </p>

        <p className={styles.text}>
          What started as tagging along with my parents turned into 
          structured training and clear goals. I was on court most days, 
          gradually increasing the hours, chasing progress more than trophies.
        </p>

        <p className={styles.text}>
          At sixteen, I beat one of my dad's longtime hitting partners — 
          someone I'd apparently declared I would defeat when I was too 
          young to remember saying it. Soon after, I won my first regional 
          tournament.
        </p>

        <p className={styles.text}>
          My next goal was bigger: earn a scholarship.
        </p>

      </section>

      <section className={`${styles.section} content-card`}>
        <h2 className={styles.sectionTitle}>🎓 Education</h2>
        <p className={styles.text}>
          My academic path wasn't linear — it was intentional, just not predictable.
        </p>

        <p className={styles.text}>
          I began at the University of Auckland studying Engineering, 
          later moving into Engineering Science. I loved the challenge, 
          but I knew there was more for me beyond New Zealand.
        </p>

        <p className={styles.text}>
          With scholarship offers waiting in the U.S., I made the leap.
          I accepted a full ride and moved across the world to compete 
          and study. My majors shifted — from Chemical Engineering and 
          Psychology to ultimately Computer Science — but the through-line 
          stayed the same: understanding systems and how people operate within them.
        </p>

        <p className={styles.text}>
          I graduated with a degree in Computer Science and a minor in Mathematics — 
          proof that the non-linear route can still lead exactly where you're meant to go.
        </p>
      </section>

      <footer className={styles.footer}>
        That's the gist! Want to see what I'm building? → <a href="/projects">Projects</a>
      </footer>
    </main>
  );
}
