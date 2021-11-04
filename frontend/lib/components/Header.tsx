import { Container } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useUserStore } from "../stores/UserStore";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { AuthModal } from "./AuthModal";

type Props = {};
export function Header(props: Props) {
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
