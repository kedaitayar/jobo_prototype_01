export type FontWeightType = {
   // prettier-ignore
   light: | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
   // prettier-ignore
   normal: | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
   // prettier-ignore
   medium: | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
   // prettier-ignore
   bold: | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
   // prettier-ignore
   extraBold: | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
};

export const FontWeight: FontWeightType = {
   light: "300",
   normal: "400",
   medium: "600",
   bold: "700",
   extraBold: "800",
};
export const FontColor = {
   Black: {
      HighEmphasis: "rgba(0,0,0,0.87)",
      MediumEmphasis: "rgba(0,0,0,0.60)",
      Disabled: "rgba(0,0,0,0.38)",
   },
   White: {
      HighEmphasis: "rgba(255,255,255,0.87)",
      MediumEmphasis: "rgba(255,255,255,0.60)",
      Disabled: "rgba(255,255,255,0.38)",
   },
};

export const TextAppearances = {

}
