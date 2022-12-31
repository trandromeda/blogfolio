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
          i) a curious and software developer who adds a playful touch to my
          work, and
        </li>
        <li>
          ii) a methodical product designer (:sprout:) with a big imagination.
        </li>
      </ul>

      <p className={styles.bodyStyle}>
        I want to solve big problems affecting people and the planet using
        empathy and ingenuity.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
