import React, { useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import mixpanel from "mixpanel-browser";
import { mpRegisterUser } from "../lib/utils/mp";
import Head from "next/head";

import chakraTheme from "../theme";
import "../styles/globals.css";
import { Header } from "../lib/components/Header";
import { Footer } from "../lib/components/Footer";
import { DAppProvider } from "@usedapp/core";
import { useUserStore } from "../lib/stores/UserStore";

const queryClient = new QueryClient();

mixpanel.init("c46647f7919eae9cb0910152a054bcd0", {
  debug: process.env.NODE_ENV == "development" ? true : false,
});

// @ts-ignore
function MyApp({ Component, pageProps }) {
  const description =
    "Uniting the best analytical minds in the space to build the future of crypto analytics.";

  const userStore = useUserStore();
  useEffect(() => {
    const idUser = async () => {
      const resp = await userStore.hydrateFromServer();
      if (resp.discord_handle) {
        mpRegisterUser(resp);
      }
    };
    idUser();
  }, []);

  return (
    <ChakraProvider theme={chakraTheme}>
      {/* @ts-ignore */}
      <DAppProvider>
        <QueryClientProvider client={queryClient}>
          <React.Fragment>
            <Head>
              <title>Metrics DAO</title>
              <meta name="description" content={description} />
              <meta property="og:url" content="https://bounty.metricsdao.xyz" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Metrics DAO" />
              <meta property="og:description" content={description} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:domain" content="metricsdao.xyz" />
              <meta property="twitter:url" content="https://metricsdao.xyz" />
              <meta name="twitter:title" content="Metrics DAO" />
              <meta name="twitter:description" content={description} />
              <meta
                name="twitter:image"
                content="https://bounty.metricsdao.xyz/social/twitter/metricsdao_banner.png"
              />
              <link rel="icon" href="/logos/color-mark@2x.png" />
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-764XXRNVYX"
              ></script>
              {/* @ts-ignore */}
              <script async src="/ga.js" />
            </Head>

            <Container maxW="container.lg" centerContent>
              <Header />
              <Component {...pageProps} />
            </Container>
            <Footer />
          </React.Fragment>
        </QueryClientProvider>
      </DAppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
