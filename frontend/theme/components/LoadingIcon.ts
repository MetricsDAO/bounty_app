import { keyframes } from "@chakra-ui/react";

const loading = keyframes`
  0% {
    transform: rotate(0);
  }

  10% {
    transform: rotate(25deg);
  }

  20% {
    transform: rotate(-25deg);
  }

  60% {
    transform: rotate(380deg) scale(1.25);
  }

  70% {
    transform: rotate(340deg) scale(0.90);
  }

  75% {
    transform: rotate(370deg) scale(1.00);
  }

  80% {
    transform: rotate(345deg) scale(0.95);
  }

  85% {
    transform: rotate(365deg) scale(1.0);
  }

  92% {
    transform: rotate(355deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = {
  baseStyle: {
    animation: `2.5s ease-in-out infinite ${loading}`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    display: "inline-block",
  },
  sizes: {
    sm: {
      h: "16px",
      w: "16px",
    },
    md: {
      h: "32px",
      w: "32px",
    },
    lg: {
      h: "64px",
      w: "64px",
    },
    xl: {
      h: "96px",
      w: "96px",
    },
    huge: {
      h: "128px",
      w: "128px",
    },
  },
  variants: {
    dark: {
      backgroundImage: "url(/images/logos/dark/box-logo.svg)",
    },
    light: {
      backgroundImage: "url(/images/logos/light/box-logo.svg)",
    },
  },
  defaultProps: {
    size: "md",
    variant: "light",
  },
};
