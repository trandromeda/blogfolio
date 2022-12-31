import {
  createVar,
  style,
  globalStyle,
  createTheme,
} from "@vanilla-extract/css";

export const colorVar = createVar();
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

export const titleStyle = style({
  color: primaryColour,
  fontWeight: 700,
  fontSize: 56,
});

export const bodyStyle = style({
  color: accentColour,
  fontSize: 24,
  fontWeight: 700,
});

export const listStyle = style({
  fontSize: 24,
});

export const asideStyle = style({
  fontSize: "0.9em",
  fontStyle: "italic",
  marginTop: 56,
  maxWidth: "50%",
  marginLeft: "auto",
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
