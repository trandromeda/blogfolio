import { createTheme, globalStyle } from "@vanilla-extract/css";

// TODO: colour can be in its own scoped theme, the rest global
export const [themeClass, globalVars] = createTheme({
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

globalStyle("a", {
  textDecoration: "none",
});

globalStyle(`li > a`, {
  color: "black",
});
