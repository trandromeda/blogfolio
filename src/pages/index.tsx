import * as React from "react";
import Layout from "@components/layout";
import Seo from "../components/seo";
import * as styles from "./index.css";
import plantFern from "../images/plant-fern.png";
import plantLeafy from "../images/plant-leafy.png";

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.wrapperStyle}>
        <img
          src={plantFern}
          alt="Plant background image"
          className={styles.leftPlantStyle}
        />
        <div className={styles.heroStyle}>
          <h1 className={`${styles.heroTextStyle} ${styles.heroChild}`}>
            Hey, it’s Andy.
          </h1>

          <h2 className={`${styles.heroTextStyle} ${styles.heroChild}`}>
            I blog about programming, design, adulthood, games, failed ideas,
            and general BS. From time to time I’ll share a case study of some UX
            work I’ve done.
          </h2>

          <div className={styles.heroChild}>
            <h2 className={styles.heroTextStyle}>
              Right now in life I’m trying to figure out:
            </h2>

            <ul className={styles.heroListStyle}>
              <li>the key to having a purposeful career;</li>
              <li>how to express myself creatively;</li>
              <li>what my dog is thinking</li>
            </ul>
          </div>
        </div>
        <img
          src={plantLeafy}
          alt="Plant background image"
          className={styles.rightPlantStyle}
        />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
