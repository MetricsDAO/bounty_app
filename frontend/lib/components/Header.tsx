import { Box, Container } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

// import mixpanel from "mixpanel-browser";
import { useUserStore } from "../stores/UserStore";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { AuthModal } from "./AuthModal";

type Props = {};
export function Header(props: Props) {
  // useEffect(() => {
  //   // track click for link id #nav
  //   mixpanel.track_links("#jim_twitter", "link_click:jim_twitter", {
  //     location: "nav",
  //   });
  //   mixpanel.track_links(
  //     "#flipsidecrypto_link",
  //     "link_click:flipsidecrypto_velocity_signup",
  //     {
  //       location: "nav",
  //     }
  //   );
  // }, []);

  const userStore = useUserStore();
  useEffect(() => {
    userStore.hydrateFromServer();
  }, []);

  const router = useRouter();
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  if (router.asPath.indexOf("authenticate") != -1 && showAuthModal === false) {
    setShowAuthModal(true);
  }

  return (
    <Container maxW="container.lg" centerContent padding="25px 0">
      <Flex
        borderBottom="1px dotted"
        borderColor="muted4"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        padding="5px 0"
      >
        <Logo />
        <NavBar openLoginModal={() => setShowAuthModal(true)} />
      </Flex>
      {showAuthModal && !userStore.isAuthenticated ? (
        <AuthModal closeLoginModal={() => setShowAuthModal(false)} />
      ) : (
        <></>
      )}
    </Container>
  );
}
