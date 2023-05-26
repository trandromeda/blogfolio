import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./layout.css";
import * as globalStyles from "@styles/globals.css";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className={`${globalStyles.themeClass} ${styles.container}`}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.link}>
            <Link to="https://publish.obsidian.md/trandromeda/Blog/_Blog+Index">
              Blog
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="/portfolio">Other writings</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
