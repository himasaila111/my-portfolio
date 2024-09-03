import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={"/my-portfolio/src/assets/about/aboutImage.png"}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"/my-portfolio/src/assets/about/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a frontend developer with experience in building responsive
                and optimized Websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"/my-portfolio/src/assets/about/serverIcon.png"} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};