import { useEffect } from "react";
import { Box, Container, Link, Icon, Flex, Text } from "@chakra-ui/react";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
// import mixpanel from "mixpanel-browser";

type Props = {};
export const Footer = (props: Props) => {
  // useEffect(() => {
  //   // mixpanel.track_links(
  //   //   "#flipsidecrypto_link_footer",
  //   //   "link_click:flipsidecrypto_velocity_signup",
  //   //   {
  //   //     location: "footer",
  //   //   }
  //   // );
  // }, []);

  return (
    <Container maxW="container.lg" centerContent padding="75px 0 50px 0">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderTop="1px dotted"
        borderColor="muted3"
        padding="8px 0"
      >
        <Link padding="0 10px" href="https://metricsdao.xyz" target="_blank">
          <Text fontSize="sm" color="subdued">
            <em>
              Uniting the best analytical minds in the space to build the future
              of crypto analytics.
            </em>
          </Text>
        </Link>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          padding="8px 0"
        >
          <Link
            padding="0 10px"
            href="https://discord.gg/3daVG8w5hG"
            target="_blank"
          >
            <Icon as={BsDiscord} />
          </Link>
          <Link
            padding="0 10px"
            href="https://github.com/MetricsDAO"
            target="_blank"
          >
            <Icon as={BsGithub} />
          </Link>
          <Link
            padding="0 10px"
            href="https://twitter.com/MetricsDAO"
            target="_blank"
          >
            <Icon as={BsTwitter} />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
