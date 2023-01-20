import { globalVars } from "@styles/globals.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const about = style({});

export const title = style({
  color: globalVars.colour.primary,
});

globalStyle(`${about} > p`, {
  fontSize: globalVars.size.subheading,
  fontFamily: globalVars.size.subheading,
  lineHeight: globalVars.lineHeight.subheading,
});
