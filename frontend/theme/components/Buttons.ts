const defaultStyleProps = {
  background: "#FFF",
  padding: "0.25em 1em",
  transition: "all linear .2s",
  fontSize: {
    base: "10px",
    sm: "14px",
  },
};

export const ActionButton = {
  baseStyle: {
    ...defaultStyleProps,
    fontSize: "12px",
    borderRadius: "4px",
    boxShadow: "0px 0px 0px 1px rgba(63, 63, 68, 0.05),0px 1px 3px 0px rgba(63, 63, 68, 0.15);",
    height: "24px",
    fontWeight: 200,
    "&:hover": {
      opacity: 0.7,
    },
  },
};

export const RoundedButton = {
  baseStyle: {
    ...defaultStyleProps,
    fontWeight: 500,
    borderRadius: "100px",
    border: "1px solid #C4CDD5",
    height: "32px",

    "+ button": {
      marginLeft: "1em !important",
    },
  },
  variants: {
    active: {
      color: "#FFF",
      bg: "#000",
    },
    inactive: {
      color: "#000",
    },
  },
  sizes: {
    standard: {
      fontSize: "14px",
      height: "32px",
      padding: "0.25em 0.5em",
    },
  },
  defaultProps: {
    size: "standard",
    variant: "active",
  },
};
