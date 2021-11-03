import { NextPage } from "next";
import {
  Box,
  Link,
  Text,
  Heading,
  Grid,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useBountyProgramStore } from "../lib/stores/BountyProgramsStore";

const BountyPrograms: NextPage = () => {
  const bountProgramStore = useBountyProgramStore();
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
          questions and upvoting existing submissions.
        </Text>
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
      {/* <Alert status="info" maxWidth="800px">
        <AlertIcon />
        Looking for Analytics on a different project? Let us know on
        <a
          href="https://discord.gg/3daVG8w5hG"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
        .
      </Alert> */}
    </Box>
  );
};

export default BountyPrograms;
