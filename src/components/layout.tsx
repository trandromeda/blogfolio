import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, title, siteTitle } from "./layout.module.css";

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};
const Layout = ({ pageTitle, children }: Props) => {
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
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
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
      <main>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
