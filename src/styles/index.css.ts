import {
  createVar,
  style,
  globalStyle,
  createTheme,
} from "@vanilla-extract/css";

export const primaryColour = createVar();
export const backgroundColour = createVar();
export const accentColour = createVar();

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
    background: "#f9f5d7",
  },
  font: {
    body: "arial",
  },
});

// TODO: Define global vars in createGlobalTheme()
globalStyle("html, body", {
  vars: {
    [primaryColour]: "#8F3F71",
    [accentColour]: "#076678",
    [backgroundColour]: "#F9F5D7",
  },
  backgroundColor: backgroundColour,
  margin: 0,
});

globalStyle("h1, h2, h3", {
  fontFamily: "Playfair Display",
});

globalStyle("li, p", {
  fontFamily: "DM Sans",
});

globalStyle(`li > a`, {
  textDecoration: "none",
  color: "black",
});

export const titleStyle = style({
  color: primaryColour,
  fontWeight: 500,
  fontSize: 40,
});

export const bodyStyle = style({
  fontSize: 18,
});

export const listStyle = style({
  fontSize: 18,
});

export const asideStyle = style({
  fontSize: "0.9em",
  fontStyle: "italic",
  marginTop: 56,
  maxWidth: "50%",
  marginLeft: "auto",
});
