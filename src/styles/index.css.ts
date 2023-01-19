import { style } from "@vanilla-extract/css";
import { globalVars } from "./globals.css";

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
      color: globalVars.colour.primary,
      gridColumn: "1 / span 3",
      gridRow: "1 / 2",
    },

    [`${heroStyle} &:nth-child(2)`]: {
      color: globalVars.colour.accent,
      gridColumn: "2 / span 6",
      gridRow: "2 / 3",
    },
    [`${heroStyle} &:nth-child(3)`]: {
      color: globalVars.colour.black,
      gridColumn: "3 / span 6",
      gridRow: "3 / 4",
    },
  },
  "@media": {
    "screen and (max-width: 918px)": {
      selectors: {
        [`${heroStyle} &:first-child`]: {
          color: globalVars.colour.primary,
          gridColumn: "1 / span 8",
          gridRow: "1 / 2",
        },

        [`${heroStyle} &:nth-child(2)`]: {
          color: globalVars.colour.accent,
          gridColumn: "1 / span 8",
          gridRow: "2 / 3",
        },
        [`${heroStyle} &:nth-child(3)`]: {
          color: globalVars.colour.black,
          gridColumn: "1 / span 8",
          gridRow: "3 / 4",
        },
      },
    },
  },
});

export const heroTextStyle = style({
  margin: "0.5em 0",
  zIndex: 2,
});

export const heroListStyle = style({
  fontSize: globalVars.size.subheading,
  fontFamily: globalVars.font.subheading,
  lineHeight: globalVars.lineHeight.subheading,
});

export const leftPlantStyle = style({
  zIndex: 1,
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
  zIndex: 1,
  position: "absolute",
  right: "-23%",
  top: "10%",
  "@media": {
    "screen and (max-width: 918px)": {
      position: "relative",
    },
  },
});
