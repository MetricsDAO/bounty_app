export const Interstitial = {
  baseStyle: {
    alignItems: "center",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    right: 0,
    top: 0,
    left: 0,
    zIndex: 100000,
    interstitialContent: {
      background: "rgba(255, 255, 255, 0.15)",
      borderRadius: "4px",
      color: "#FFF",
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      position: "absolute",
      zIndex: 1,
      "> * + *": {
        marginTop: "0.5em",
      },
    },
    _after: {
      content: `""`,
      height: "100%",
      position: "absolute",
      width: "100%",
    },
  },
  variants: {
    transparent: {
      _after: {
        background: "rgba(33, 43, 54, 0.5)",
      },
    },
    opaque: {
      _after: {
        background: "rgba(33, 43, 54, 1)",
      },
    },
  },
  defaultProps: {
    variant: "transparent",
  },
};
