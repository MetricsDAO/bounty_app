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
  Icon,
} from "@chakra-ui/react";
import { useUserStore } from "../stores/UserStore";
import { FiLogOut } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { destroyCookie } from "nookies";

type Props = {
  openLoginModal: () => void;
  discordHandle?: string;
  handleLogout?: () => void;
};

export const NavBar = ({ openLoginModal }: Props) => {
  const [isLessThan700] = useMediaQuery("(max-width: 700px)");
  const userStore = useUserStore();
  const handleLogout = async () => {
    console.log("log out");
    await destroyCookie(null, "Authorization");
    window.location.assign("/");
  };
  return (
    <React.Fragment>
      {isLessThan700 ? (
        <MobileNavBar
          openLoginModal={openLoginModal}
          discordHandle={userStore.discord_handle}
          handleLogout={handleLogout}
        />
      ) : (
        <DesktopNavBar
          openLoginModal={openLoginModal}
          discordHandle={userStore.discord_handle}
          handleLogout={handleLogout}
        />
      )}
    </React.Fragment>
  );
};

const DesktopNavBar = ({
  openLoginModal,
  discordHandle,
  handleLogout,
}: Props) => {
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
          <div>|</div>
          <Button padding="0 10px" variant="light" onClick={handleLogout}>
            <Icon as={FiLogOut} />
          </Button>
        </>
      ) : (
        <Button variant="secondary" onClick={openLoginModal}>
          Login
        </Button>
      )}
    </Flex>
  );
};

const MobileNavBar = ({
  openLoginModal,
  discordHandle,
  handleLogout,
}: Props) => {
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
        {discordHandle && (
          <MenuItem>
            <Button padding="0 10px" variant="light" onClick={handleLogout}>
              <Icon as={FiLogOut} />
            </Button>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
