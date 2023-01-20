import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./layout.css";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.link}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={styles.link}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
