import React from "react";
import { default as NextLink } from "next/link";
import { Box } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <React.Fragment>
      <NextLink href="/">
        <Box
          cursor="pointer"
          background="url(/logos/color-lightbg@2x.png)"
          backgroundRepeat="no-repeat"
          backgroundSize="100% auto"
          width="230px"
          height="50px"
        ></Box>
      </NextLink>
    </React.Fragment>
  );
};
