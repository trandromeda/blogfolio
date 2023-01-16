import {
  createVar,
  style,
  globalStyle,
  createTheme,
} from "@vanilla-extract/css";

export const primaryColour = createVar();
export const backgroundColour = createVar();
export const accentColour = createVar();
export const blackColour = createVar();

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
    [backgroundColour]: "#FDFCF8",
    [blackColour]: "#333333",
  },
  backgroundColor: backgroundColour,
  margin: 0,
});

globalStyle("h1, h2, h3", {
  fontFamily: "Playfair Display",
});

globalStyle("p", {
  fontFamily: "DM Sans",
});

globalStyle(`li > a`, {
  textDecoration: "none",
  color: "black",
});

export const wrapperStyle = style({
  position: "relative",
  "@media": {
    "screen and (max-width: 918px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export const heroStyle = style({
  position: "relative",
  padding: "2em 1em",
  display: "grid",
  gridTemplateRows: "fit-content(30%)",
  gridTemplateColumns: "repeat(8, 1fr)",
});

export const heroChild = style({
  selectors: {
    [`${heroStyle} &:first-child`]: {
      color: primaryColour,
      gridColumn: "1 / span 3",
      gridRow: "1 / 2",
    },

    [`${heroStyle} &:nth-child(2)`]: {
      color: accentColour,
      gridColumn: "2 / span 6",
      gridRow: "2 / 3",
    },
    [`${heroStyle} &:nth-child(3)`]: {
      color: blackColour,
      gridColumn: "3 / span 6",
      gridRow: "3 / 4",
    },
  },
  "@media": {
    "screen and (max-width: 918px)": {
      selectors: {
        [`${heroStyle} &:first-child`]: {
          color: primaryColour,
          gridColumn: "1 / span 8",
          gridRow: "1 / 2",
        },

        [`${heroStyle} &:nth-child(2)`]: {
          color: accentColour,
          gridColumn: "1 / span 8",
          gridRow: "2 / 3",
        },
        [`${heroStyle} &:nth-child(3)`]: {
          color: blackColour,
          gridColumn: "1 / span 8",
          gridRow: "3 / 4",
        },
      },
    },
  },
});

export const heroTextStyle = style({
  margin: "0.5em 0",
  fontFamily: "Playfair Display",
  fontSize: 32,
  lineHeight: "48px",
});

export const leftPlantStyle = style({
  position: "absolute",
  left: "-25%",
  top: "14%",
  "@media": {
    "screen and (max-width: 918px)": {
      display: "none",
    },
  },
});

export const rightPlantStyle = style({
  position: "absolute",
  right: "-23%",
  top: "10%",
  "@media": {
    "screen and (max-width: 918px)": {
      position: "relative",
    },
  },
});
