import * as React from "react";
import Layout from "@components/layout";
import * as styles from "./about.css";

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h1 className={styles.title}>About me</h1>
        <p>My name is Andy and I currently live in Toronto, Canada.</p>

        <p>
          I’m a lifelong gamer; I’m a sucker for good world building or
          compelling characters.
        </p>

        <p>
          I’m a proud parent of an incredibly cute and friendly dog (but I
          didn’t always feel this way, admittedly!)
        </p>

        <p>
          Thanks to a caring and patient partner, I’ve stopped trying to predict
          my future and just enjoy life day-by-day; however, my dreams and
          ambitions still guide my decisions.
        </p>
      </div>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
