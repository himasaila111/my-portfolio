import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/my-portfolio/src/assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:myemail@email.com">himasaila24@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"/my-portfolio/src/assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/himasaila-gonugunta/">himasailagonugunta</a>
        </li>
        <li className={styles.link}>
          <img src={"/my-portfolio/src/assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/himasaila111">himasaila111</a>
        </li>
      </ul>
    </footer>
  );
};