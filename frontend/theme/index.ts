import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme, ThemeOverride } from "@chakra-ui/react";

// Individual components
import { Interstitial } from "./components/Interstitial";
import { LoadingIcon } from "./components/LoadingIcon";
import { Progress } from "./components/Progress";
import { DataTable } from "./components/DataTable";
import { Tab } from "./components/Tab";
import { Table } from "./components/Table";
import { ActionButton, RoundedButton } from "./components/Buttons";

const overrides: ThemeOverride = {
  breakpoints: createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  }),

  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    monospace: "Inter, sans-serif",
  },

  textStyles: {
    mono: {
      fontFamily: '"Roboto Mono", monospace',
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: 4,
      },
      variants: {
        primary: {
          color: "white",
          bg: "#3A49DA",
        },
        light: {
          color: "#000",
          bg: "#FFF",
        },
        dark: {
          color: "#FFF",
          bg: "#000",
        },
        secondary: {
          bg: "rgba(99, 113, 255, 0.1)",
          border: "0.5px solid rgb(101, 106, 255)",
          color: "#5966e6",
        },
        placeholder: {
          bg: "#919EAB",
          color: "#FFFFFF",
        },
      },
      sizes: {
        standard: {
          fontSize: "14px",
          height: "32px",
          padding: "0.25em 0.5em",
        },
      },
    },

    Menu: {
      baseStyle: {
        list: {
          minW: "170px",
          border: `1px solid #DFE3E8`,
          boxShadow: `0px 0px 8px rgba(33, 43, 54, 0.1)`,
        },
        item: {
          fontSize: "sm",
          minH: 12,
          px: 4,
        },
      },
    },

    Input: {
      variants: {
        filled: {
          field: {
            bg: "whitepx",
            borderWidth: 1,
            borderColor: "#c4cdd5px",
            _hover: {
              bg: "whitepx",
            },
            _focus: {
              bg: "whitepx",
            },
          },
        },
      },
    },

    Modal: {
      baseStyle: {
        header: {
          fontSize: "md",
          fontWeight: "400",
        },
        footer: {
          borderTop: "1px solid",
          borderColor: "gray.200",
        },
      },
    },

    Icon: {
      variants: {
        menu: {
          color: "subdued",
          mr: 2,
        },
      },
    },

    Switch: {
      variants: {
        shareDialogue: {
          track: {
            _checked: {
              bg: "#3A49DA",
            },
          },
        },
      },
    },

    Tabs: {
      variants: {
        visualizer: {
          tablist: {
            bg: "gray.200",
            px: 6,
          },
          tabpanel: {
            p: 6,
          },
          tab: {
            h: 12,
            fontSize: "sm",
            fontWeight: "bold",
            _selected: {
              borderColor: "blue",
              borderBottomWidth: 3,
              color: "blue",
            },
          },
        },
      },
    },

    Table,
    Interstitial,
    LoadingIcon,
    DataTable,
    Tab,
    ActionButton,
    RoundedButton,
    Progress,
  },

  colors: {
    text: "#212B36",
    blue: "#3A49DA",
    text3: "#637381",
    indigo: "#3A60E9",
    muted: "#F4F6F8",
    muted2: "#F5F6F8",
    muted3: "#DFE3E8",
    muted4: "#919eab",
    muted5: "#c4cdd5",
    subdued: "#637381",
    seaGreen: "#7CC9D4",
    cloudBlue: "#1fc4f3",
    navy: {
      500: "#281A80",
    },
    gray: {
      100: "#F9FAFB",
      200: "#ECEFF1",
      300: "#DFE3E8",
      900: "#10151A",
    },
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "24px",
    "4xl": "28px",
  },
};

export default extendTheme(overrides);
