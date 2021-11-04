import { useEffect } from "react";
import { Box, Container, Link, Icon, Flex, Text } from "@chakra-ui/react";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import mixpanel from "mixpanel-browser";

type Props = {};
export const Footer = (props: Props) => {
  useEffect(() => {
    mixpanel.track_links(
      "#about_metricsdao_footer",
      "link_click:about_metricsdao",
      {
        location: "footer",
      }
    );
    mixpanel.track_links("#discord_footer", "link_click:discord", {
      location: "footer",
    });
    mixpanel.track_links("#github_footer", "link_click:github", {
      location: "footer",
    });
    mixpanel.track_links("#twitter_footer", "link_click:twitter", {
      location: "footer",
    });
  }, []);

  return (
    <Container maxW="container.lg" centerContent padding="50px 0 50px 0">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderTop="1px dotted"
        borderColor="muted3"
        padding="8px 0"
      >
        <Link
          id="about_metricsdao_footer"
          padding="0 10px"
          href="https://metricsdao.xyz"
          target="_blank"
        >
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
            id="discord_footer"
            padding="0 10px"
            href="https://discord.gg/3daVG8w5hG"
            target="_blank"
          >
            <Icon as={BsDiscord} />
          </Link>
          <Link
            id="github_footer"
            padding="0 10px"
            href="https://github.com/MetricsDAO"
            target="_blank"
          >
            <Icon as={BsGithub} />
          </Link>
          <Link
            id="twitter_footer"
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
