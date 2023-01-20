import { globalStyle, style } from "@vanilla-extract/css";
import { globalVars } from "@styles/globals.css";

export const container = style({
  position: "relative",
  margin: "auto",
  width: "100%",
  height: "100vh",
  overflowX: "hidden",
  "@media": {
    "screen and (max-width: 918px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export const content = style({
  padding: "2em 16%",
  "@media": {
    "screen and (max-width: 918px)": {
      padding: "1em 5%",
    },
  },
});

export const nav = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  backgroundColor: "white",
  padding: "0 2em",
});

globalStyle(`${nav} > ul`, {
  flex: "0 1 25%",
  display: "flex",
  justifyContent: "space-between",
  listStyleType: "none",
  fontWeight: 500,
  fontFamily: globalVars.font.body,
});

export const link = style({
  padding: "0.5em 1em",
  ":hover": {
    backgroundColor: "#f2f2f2",
  },
});
