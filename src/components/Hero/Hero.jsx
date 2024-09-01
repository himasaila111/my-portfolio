import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Himasaila</h1>
        <p className={styles.description}>
          I&apos;m a full-stack developer with around 4 years of experience using ReactJS and
          NodeJS.
        </p>
        <div className = {styles.contact}>
        <a href="https://docs.google.com/document/d/1mOnGcrwroEF1tbq8tapcx3QwfSPzOUN2/edit?usp=sharing&ouid=113168555433019007332&rtpof=true&sd=true" target="_blank"><button className={styles.cvBtn}>Find My CV</button></a>
        <a href="mailto:himasaila24@email.com" target="_blank"><img src={getImageUrl("hero/email.png")} alt="gmail" className={styles.gmail}></img></a>
        <a href="https://www.linkedin.com/in/himasaila-gonugunta/" target="_blank"><img src={getImageUrl("hero/linkedin.png")} alt="linkedin" className={styles.linkedin}></img></a>
        <a href="https://github.com/himasaila111" target="_blank"><img src={getImageUrl("hero/github.png")} alt="Github" className={styles.github}></img></a>
        <a href="https://docs.google.com/document/d/1mOnGcrwroEF1tbq8tapcx3QwfSPzOUN2/edit?usp=sharing&ouid=113168555433019007332&rtpof=true&sd=true" target="_blank"><img src={getImageUrl("hero/resume.png")} alt="resume" className={styles.resume}></img></a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};