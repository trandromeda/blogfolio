import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "@styles/index.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" hideTitle={true}>
      <h1 className={styles.titleStyle}>
        Welcome to my little nook on the web. I am:
      </h1>

      <ul className={styles.listStyle}>
        <li>
          i) a curious software developer who adds a{" "}
          <span role="img" aria-label="dog">
            💖
          </span>{" "}
          touch to my work, and
        </li>
        <li>
          ii) a{" "}
          <span role="img" aria-label="dog">
            🌱
          </span>{" "}
          UX designer with a big imagination.
        </li>
      </ul>

      <p className={styles.bodyStyle}>
        I want to solve big problems affecting people and the planet using
        empathy and ingenuity.
      </p>

      <p className={styles.asideStyle}>
        If you've somehow found this place, it's still under construction as I'm
        porting over years of my old blog posts littered across my hard drive.
        Please bear with me!
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
