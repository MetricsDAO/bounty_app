import React, { useRef, useEffect, useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import Web3 from "web3";

import { getNonce, authenticateUser } from "../api";
import { setCookie, parseCookies } from "nookies";
import { useUserStore } from "../stores/UserStore";

type Props = {
  buttonText?: string;
  discordHandle: string;
  setError: (v: string) => void;
};

export const ConnectButton = ({
  buttonText,
  discordHandle,
  setError,
}: Props) => {
  const { activateBrowserWallet, account } = useEthers();
  const [isAuthenticated, setAuthenticated] = useState<Boolean>(false);

  const userStore = useUserStore();
  const toast = useToast();

  useEffect(() => {
    setAuthenticated(parseCookies()["Authorization"] ? true : false);
    userStore.hydrateFromServer();
  }, []);

  async function handleConnectWallet() {
    if (!discordHandle) {
      setError("Discord Handle Required to Login!");
      return;
    }
    if (!account) {
      const connectResult = await activateBrowserWallet();
    }

    if (isAuthenticated) {
      console.log("user is authenticated");
      return;
    }

    const web3 = new Web3(Web3.givenProvider);
    const coinbase = await web3.eth.getCoinbase();

    const nonceResp = await getNonce(coinbase);
    const message = nonceResp.data.msg;

    var hex = "";
    for (var i = 0; i < message.length; i++) {
      hex += "" + message.charCodeAt(i).toString(16);
    }
    var hexMessage = "0x" + hex;

    const sig = await web3.eth.personal.sign(hexMessage, coinbase, "");
    if (!sig) {
      return;
    }

    const authResp = await authenticateUser(coinbase, sig, discordHandle);
    await setCookie(null, "Authorization", authResp.data.jwt, {
      maxAge: 365 * 24 * 60 * 60, // one year
      path: "/",
    });

    setAuthenticated(true);
    userStore.hydrateFromServer();
    toast({
      title: `Sup, ${discordHandle} 😎`,
      description: "We've gone ahead and signed you in.",
      status: "success",
      position: "top",
      duration: 12000,
      isClosable: true,
    });
  }

  if (isAuthenticated && account) return <div>SignedIn</div>;

  return (
    <Button variant="secondary" onClick={handleConnectWallet}>
      {buttonText ? buttonText : "Connect & Login"}
    </Button>
  );
};
