import React from "react";

import {
  Button,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useUserStore } from "../stores/UserStore";

type Props = {
  openLoginModal: () => void;
  discordHandle?: string;
};

export const NavBar = ({ openLoginModal }: Props) => {
  const [isLessThan700] = useMediaQuery("(max-width: 700px)");
  const userStore = useUserStore();

  return (
    <React.Fragment>
      {isLessThan700 ? (
        <MobileNavBar
          openLoginModal={openLoginModal}
          discordHandle={userStore.discord_handle}
        />
      ) : (
        <DesktopNavBar
          openLoginModal={openLoginModal}
          discordHandle={userStore.discord_handle}
        />
      )}
    </React.Fragment>
  );
};

const DesktopNavBar = ({ openLoginModal, discordHandle }: Props) => {
  return (
    <Flex padding="5px 0 5px 0" flexDirection="row" alignItems="center">
      <Link padding="0 10px" href="/">
        Bounty Programs
      </Link>
      <div>|</div>
      <Link padding="0 10px" href="https://metricsdao.xyz" target="_blank">
        About
      </Link>
      {discordHandle ? (
        <>
          <div>|</div>
          <Text padding="0 10px" color="cloudBlue" fontWeight="bold">
            Sup, {discordHandle} 😎
          </Text>
        </>
      ) : (
        <Button variant="secondary" onClick={openLoginModal}>
          Login
        </Button>
      )}
    </Flex>
  );
};

const MobileNavBar = ({ openLoginModal, discordHandle }: Props) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>
          <Link href="/">Bounty Programs</Link>
        </MenuItem>
        <MenuItem>
          <Link href="https://metricsdao.xyz" target="_blank">
            About
          </Link>
        </MenuItem>
        <MenuItem>
          {discordHandle ? (
            <Text color="cloudBlue">Sup, {discordHandle}</Text>
          ) : (
            <Button variant="secondary" onClick={openLoginModal}>
              Login
            </Button>
          )}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
