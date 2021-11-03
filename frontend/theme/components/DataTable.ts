// Can't seem to extend the built-in Chakra Table component, so...
export const DataTable = {
  baseStyle: {
    borderCollapse: "collapse",
    borderWidth: "1px",
    fontSize: "12px",
    width: "100%",
    "th, td": {
      borderWidth: "1px",
      fontWeight: 500,
      padding: "0.5em",
      textTransform: "none",
    },
    "tr:nth-of-type(even) td": {
      backgroundColor: "#ECEEEF !important",
    },
    "th, tr > td:first-of-type": {
      backgroundColor: "#DFE3E8 !important",
    },
    "th:first-of-type, td:first-of-type": {
      minWidth: "2.5em",
      textAlign: "right",
      userSelect: "none",
      width: "5em",
    },
    thead: {
      textAlign: "left",
      whiteSpace: "nowrap",
      borderBottom: "1px solid",
      borderColor: "muted3",
    },
  },
};
