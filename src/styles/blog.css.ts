import { globalStyle, style } from "@vanilla-extract/css";
import { globalVars } from "@styles/globals.css";

export const title = style({
  color: globalVars.colour.accent,
});

export const date = style({
  margin: "40px 0 32px 0",
});

export const nav = style({
  marginTop: "2em",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const link = style({});

export const left = style([
  link,
  {
    marginRight: "auto",
  },
]);

export const right = style([
  link,
  {
    marginLeft: "auto",
  },
]);

globalStyle(`${link} a`, {
  display: "flex",
  alignItems: "center",
  gridGap: "1em",
  textDecoration: "none",
});
