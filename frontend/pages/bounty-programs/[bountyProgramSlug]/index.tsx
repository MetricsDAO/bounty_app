import { NextPage } from "next";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CannyWidget } from "../../../lib/components/CannyWidget";
import { useRouter } from "next/dist/client/router";
import { stringify } from "query-string";
import { useBountyProgramStore } from "../../../lib/stores/BountyProgramsStore";
import { useUserStore } from "../../../lib/stores/UserStore";
import { useState } from "react";

const BountyPrograms: NextPage = () => {
  const router = useRouter();
  const bountyProgramStore = useBountyProgramStore();
  const [counter, setCounter] = useState<number>(0);
  const userStore = useUserStore();
  const bountyProgramSlug = router.query.bountyProgramSlug;
  if (!bountyProgramSlug) {
    return <div>No Bounty Program found</div>;
  }

  if (userStore.isAuthenticated && counter == 0) {
    setCounter(1);
    setTimeout(() => {
      setCounter(2);
    });
  }

  const bountyProgram = bountyProgramStore.getBySlug(bountyProgramSlug);
  return (
    <Box width="100%">
      <Box
        margin="0 0 20px 0"
        backgroundColor="muted"
        padding="15px"
        borderRadius="4px"
      >
        <Heading fontSize="lg" fontFamily="mono">
          🕵️‍♀️ {bountyProgram.name} Bounty Questions
        </Heading>
        <Text fontFamily="mono" fontSize="sm">
          <br />A space to propose and gather questions relevant to{" "}
          {bountyProgram.name}. What do you want to know about{" "}
          {bountyProgram.name}? Questions defined, and ranked here will form the
          basis of future Bounty Rounds by the MetricsDAO!
          <br />
          <br />
          See a question you want answered? Upvote it! The top 10 up-voted
          questions will make it into the next bounty round.
        </Text>
      </Box>
      <Box>
        {(counter == 0 || counter == 2) && (
          <CannyWidget boardToken={bountyProgram.bountyProgramID} />
        )}
      </Box>
    </Box>
  );
};

export default BountyPrograms;
