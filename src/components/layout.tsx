import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  title,
  nav,
  links,
  main,
  navLogo,
} from "./layout.module.css";

type Props = {
  pageTitle?: string | null;
  hideTitle?: boolean;
  children: React.ReactNode;
};
const Layout = ({ pageTitle, hideTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query Layout {
      site(siteMetadata: { title: { eq: "My Portfolio" } }) {
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <nav className={nav}>
        <p className={navLogo}>trandromeda.com</p>
        <ul className={links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main className={main}>
        {!hideTitle && <h1 className={title}>{pageTitle}</h1>}
        {children}
      </main>
    </div>
  );
};

export default Layout;
