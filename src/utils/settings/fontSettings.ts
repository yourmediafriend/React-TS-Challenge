const fontFamily = (name: string) =>
  `"${name}", "Helvetica Neue", Verdana, Arial, sans-serif`;

export const fontSettings = {
  primary: {
    fontName: "Montserrat",
    fontFamily: fontFamily("Montserrat"),
    extraBold: {
      fontWeight: 800,
    },
    bold: {
      fontWeight: 600,
    },
    regular: {
      fontWeight: 400,
    },
  },
  secondary: {
    fontName: "Open Sans",
    fontFamily: fontFamily("Open Sans"),
    extraBold: {
      fontWeight: 800,
    },
    bold: {
      fontWeight: 600,
    },
    regular: {
      fontWeight: 400,
    },
  },
  extra: {
    fontName: "Proxima Nova",
    fontFamily: fontFamily("Proxima Nova"),
    extraBold: {
      fontWeight: 800,
    },
    bold: {
      fontWeight: 600,
    },
    regular: {
      fontWeight: 400,
    },
  },
};

export default fontSettings;
