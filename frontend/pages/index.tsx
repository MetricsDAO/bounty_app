import { NextPage } from "next";
import { Box, Link, Text, Heading } from "@chakra-ui/react";
import { useBountyProgramStore } from "../lib/stores/BountyProgramsStore";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const BountyPrograms: NextPage = () => {
  const bountProgramStore = useBountyProgramStore();
  useEffect(() => {
    mixpanel.track_links(
      "#bounty_request_discord",
      "link_click:bounty_request_discord",
      {
        location: "home",
      }
    );
    mixpanel.track("page_view:bounty_programs:all");
  }, []);

  return (
    <Box width="100%">
      <Box
        margin="0 0 20px 0"
        backgroundColor="muted"
        padding="15px"
        borderRadius="4px"
      >
        <Heading fontSize="lg" fontFamily="mono">
          🙋‍♀️ Bounty Programs - Question Sourcing
        </Heading>
        <Text fontFamily="mono" fontSize="sm">
          <br />
          The following are active Bounty Programs the Metrics DAO is collecting
          questions for. Click on a Bounty Program below to begin submiting
          questions and upvoting existing submissions. Anyone can participate &
          earn rewards!
        </Text>
        <br />
        <Link
          id="bounty_request_discord"
          href="https://discord.gg/3daVG8w5hG"
          target="_blank"
          color="indigo"
          fontSize="sm"
        >
          <em>
            More Bounty Programs Coming Soon. Request the next one on Discord!
          </em>
        </Link>
      </Box>
      <Box>
        {bountProgramStore.programs.map((b, i) => {
          let url = `/bounty-programs/${b.slug}`;
          return (
            <Box key={i} marginBottom="5px">
              <Link
                href={url}
                color="rgb(63, 81, 181)"
                fontSize="3xl"
                fontFamily="'Allerta Stencil',sans-serif"
              >
                {i + 1}. {b.name}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default BountyPrograms;
