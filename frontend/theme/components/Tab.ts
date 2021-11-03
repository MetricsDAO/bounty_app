export const Tab = {
  baseStyle: {
    borderBottom: "none",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    cursor: "pointer",
    display: "flex",
    height: "36px",
    position: "relative",
    top: "5px",
    mx: "4px",
    px: 3,
    alignItems: "center",
    "&.tab + .tab::before": {
      background: "#FFF",
      content: "''",
      height: "1.5rem",
      left: "-1.5em",
      opacity: 0.25,
      position: "relative",
      width: "1px",
    },
    text: {
      fontSize: "inherit",
    },
    close: {
      display: "inline-block",
      height: "1em",
      marginLeft: "0.25em",
      width: "1em",
      "> svg": {
        display: "inline-block",
        height: "100%",
        verticalAlign: "baseline",
        width: "100%",
      },
    },
  },
  sizes: {
    sm: {
      fontSize: "12px",
    },
    md: {
      fontSize: "14px",
    },
  },
  defaultProps: {
    size: "md",
  },
};
