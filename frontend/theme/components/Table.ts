export const Table = {
  variants: {
    workspace: {
      table: {
        alignItems: "center",
        display: "grid",
        fontSize: "14px",
        gridGap: "0",
        gridTemplateColumns: {
          base: "repeat(3, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
          xl: "repeat(12, 1fr)",
        },
        "th, td": {
          // With three-dot menu in place, this should span 2
          gridColumn: {
            base: "span 1",
            lg: "span 2",
          },
          padding: 0,
        },
        th: {
          padding: "1em",
          display: {
            base: "none",
            sm: "none",
            md: "table-cell",
          },
        },
        td: {
          padding: "1em",
          height: "100%",
          display: {
            base: "none",
            sm: "none",
            md: "table-cell",
          },
          wordBreak: "break-all",
        },
        "tr:hover > td": {
          backgroundColor: "#f9fafb",
        },
        "tr::after": {
          content: '""',
          borderStyle: "solid",
          borderTopWidth: "1px",
          gridColumn: "1/-1",
        },
        "td:last-child": {
          // Three-dot menu should span 1 at all breakpoints
          display: "table-cell",
          gridColumn: {
            base: "span 1",
            sm: "span 1",
            md: "span 1",
            lg: "span 1",
            xl: "span 1",
          },
          justifyContent: "flex-end",
          paddingRight: 0,
          textAlign: "right",
        },
        "th:first-of-type, td:first-of-type": {
          display: "table-cell",
          gridColumn: {
            base: "span 2",
            sm: "span 2",
            md: "span 2",
            lg: "span 5",
            xl: "span 5",
          },
        },
        "th:nth-of-type(2), td:nth-of-type(2), th:nth-of-type(3), td:nth-of-type(3)": {
          gridColumn: {
            base: "span 1",
            sm: "span 1",
            md: "span 2",
            lg: "span 2",
            xl: "span 2",
          },
        },
      },
      thead: {
        display: "contents",
      },
      tbody: {
        display: "contents",
      },
      tr: {
        display: {
          base: "table",
          sm: "contents",
        },
        gridColumn: {
          base: "span 3",
          sm: "none",
        },
        margin: 0,
      },
    },
    discover: {
      table: {
        alignItems: "center",
        display: "grid",
        fontSize: "14px",
        gridGap: "0",
        gridTemplateColumns: {
          base: "repeat(3, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
          xl: "repeat(12, 1fr)",
        },
        "th, td": {
          gridColumn: {
            base: "span 1",
            lg: "span 3",
          },
          padding: 0,
        },
        th: {
          padding: "1em",
          display: {
            base: "none",
            sm: "none",
            md: "table-cell",
          },
        },
        td: {
          padding: "1em",
          height: "100%",
          display: {
            base: "none",
            sm: "none",
            md: "table-cell",
          },
          wordBreak: "break-all",
        },
        "tr:hover > td": {
          backgroundColor: "#f9fafb",
        },
        "tr::after": {
          content: '""',
          borderStyle: "solid",
          borderTopWidth: "1px",
          gridColumn: "1/-1",
        },
        "td:last-child": {
          display: "table-cell",
          gridColumn: {
            base: "span 1",
          },
          justifyContent: "flex-end",
          paddingRight: 0,
          textAlign: "right",
        },
        "th:first-of-type, td:first-of-type": {
          display: "table-cell",
          gridColumn: {
            base: "span 2",
            sm: "span 2",
            md: "span 3",
            lg: "span 5",
            xl: "span 5",
          },
        },
        "th:nth-of-type(2), td:nth-of-type(2), th:nth-of-type(3), td:nth-of-type(3)": {
          gridColumn: {
            base: "span 1",
            sm: "span 1",
            md: "span 2",
            lg: "span 3",
            xl: "span 3",
          },
        },
      },
      thead: {
        display: "contents",
      },
      tbody: {
        display: "contents",
      },
      tr: {
        display: {
          base: "table",
          sm: "contents",
        },
        gridColumn: {
          base: "span 3",
          sm: "none",
        },
        margin: 0,
      },
    },
  },
};
