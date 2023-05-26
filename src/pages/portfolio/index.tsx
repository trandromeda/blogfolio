import * as React from "react";
import * as styles from "@styles/portfolio.css";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Portfolio = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Other writings</h1>

      <p>
        Sorry for the mess, this page is still under construction. In the
        meantime you can view:
      </p>

      <h2>Oniva</h2>
      <p>
        <a href="https://coda.io/@trandromeda/oniva" target="_blank">
          https://coda.io/@trandromeda/oniva
        </a>
      </p>
      <p>
        UX case study on an app I designed to address loneliness. Completed as
        part of UX design course.
      </p>

      <h2>Obsidian garden</h2>
      <p>
        <a href="https://publish.obsidian.md/trandromeda" target="_blank">
          https://publish.obsidian.md/trandromeda
        </a>
      </p>
      <p>
        Collection of my public Obsidian notes, including readings,
        zettelkasten, and programming languages
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="Portfolio" />;

export default Portfolio;
