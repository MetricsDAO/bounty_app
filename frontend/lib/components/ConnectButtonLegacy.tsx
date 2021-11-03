import React, { useRef, useEffect, useState } from "react";
// import { Button, Box } from "theme-ui";
import { useEthers } from "@usedapp/core";
import Web3 from "web3";

import { getNonce, authenticateUser } from "../api";
import { setCookie, parseCookies } from "nookies";
import { useUserStore } from "../stores/UserStore";
import queryString from "query-string";

//@ts-ignore
function getQueryParameterByName(name) {
  const qs = location.hash.replace("#authenticate", "");
  return queryString.parse(qs)[name];
}

//@ts-ignore
function getRedirectURL(ssoToken) {
  const redirectURL = getQueryParameterByName("redirect");
  const companyID = getQueryParameterByName("companyID");

  if (
    redirectURL === null ||
    redirectURL.indexOf("https://") !== 0 ||
    !companyID
  ) {
    return null;
  }
  return (
    "https://canny.io/api/redirects/sso?companyID=" +
    companyID +
    "&ssoToken=" +
    ssoToken +
    "&redirect=" +
    redirectURL
  );
}

export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers();
  const [isAuthenticated, setAuthenticated] = useState<Boolean>(false);

  const userStore = useUserStore();

  useEffect(() => {
    console.log("authenticated: ", parseCookies()["Authorization"]);
    setAuthenticated(parseCookies()["Authorization"] ? true : false);
    userStore.hydrateFromServer();
  }, []);

  async function handleConnectWallet() {
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

    console.log("sig: ", sig);
    const authResp = await authenticateUser(coinbase, sig);
    console.log("jwt: ", authResp.data.jwt);
    await setCookie(null, "Authorization", authResp.data.jwt, {
      maxAge: 365 * 24 * 60 * 60, // one year
      path: "/",
    });

    setAuthenticated(true);
    userStore.hydrateFromServer();
    const ssoToken = authResp.data.jwt;
    //@ts-ignore
    var redirectURL = getRedirectURL(ssoToken);
    console.log("getRedirectURL: ", getRedirectURL);
    if (redirectURL) {
      window.location.assign(redirectURL);
    }
  }

  if (isAuthenticated && account) return <React.Fragment />;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {/* @ts-ignore */}
      <button style={btn} onClick={handleConnectWallet}>
        Connect Your Wallet
      </button>
    </div>
  );
}

const btn = {
  backgroundColor: "#32A956",
  borderBottom: "5px inset rgba(0,0,0,.5)",
  borderLeft: "5px inset rgba(0,0,0,.5)",
  borderRright: "5px inset rgba(255,255,255,.5)",
  borderTop: "5px inset rgba(255,255,255,.5)",
  //   boxSizing: "border-box",
  color: "white",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "15px",
  textAlign: "center",
  minWidth: "95px",
  padding: "3px 3px",
  textTransform: "uppercase",
  width: "auto",
  fontFamily: "'VT323', monospace",
  transition: "background 0.5s ease",
  margin: "0 3px",
  height: "33px",
  "@media screen and (max-width: 500px)": {
    fontSize: "15px",
    minWidth: "120px",
  },
  "&:hover": { backgroundColor: "#0cf051" },
};
