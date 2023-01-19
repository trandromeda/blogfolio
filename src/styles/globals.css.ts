import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const globalVars = createGlobalTheme(":root", {
  colour: {
    primary: "#8F3F71",
    accent: "#076678",
    background: "#FDFCF8",
    black: "#333333",
  },
  font: {
    header: "Playfair Display",
    subheading: "Playfair Display",
    body: "DM Sans",
  },
  size: {
    header: "2rem",
    subheading: "1.8rem",
    body: "1rem",
  },
  lineHeight: {
    header: "3.3rem",
    subheading: "2.7rem",
    body: "1.3rem",
  },
});

globalStyle("html, body", {
  backgroundColor: globalVars.colour.background,
  margin: 0,
  width: "100%",
  height: "100%",
  fontSize: "18px",
});

globalStyle("h1", {
  fontFamily: globalVars.font.header,
  fontSize: globalVars.size.header,
  lineHeight: globalVars.lineHeight.header,
  fontWeight: 400,
});

globalStyle("h2", {
  fontFamily: globalVars.font.subheading,
  fontSize: globalVars.size.subheading,
  lineHeight: globalVars.lineHeight.subheading,
  fontWeight: 400,
});

globalStyle("p", {
  fontFamily: globalVars.font.body,
  fontSize: globalVars.size.body,
  lineHeight: globalVars.lineHeight.body,
});

globalStyle(`li > a`, {
  textDecoration: "none",
  color: "black",
});
