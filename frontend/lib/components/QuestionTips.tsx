import { Text, OrderedList, ListItem, Box } from "@chakra-ui/react";

export const QuestionTips = () => {
  return (
    <>
      <Text fontWeight="800">TL;DR tips:</Text>
      <Text marginTop="10px">
        Don’t ever assume that someone will “know what you mean”
      </Text>
      <OrderedList marginTop="5px">
        <ListItem>Be specific</ListItem>
        <ListItem>Define metrics</ListItem>
        <ListItem>Specify time boundaries</ListItem>
      </OrderedList>
      <Text marginTop="10px">Example:</Text>
      <Text marginTop="5px" textDecoration="line-through">
        How many people actively use Sushi?
      </Text>
      <Text marginTop="3px">
        How many addresses have transferred SUSHI on Ethereum in the last 90
        days?
      </Text>
      <Text marginTop="5px">————————</Text>
      <Text marginTop="10px">
        Good answers come from good questions. Here’s an example of a question
        that is seemingly simple but can be improved:
      </Text>
      <Text marginTop="5px">ORIGINAL: How many people actively use Sushi?</Text>
      <Box marginTop="15px">
        <Text fontWeight="bold">Be specific.</Text>
        <Text>
          The original question has many interpretations: SUSHI the token? SUSHI
          the dex? What is a person? Are we talking Ethereum? What about
          Polygon?
        </Text>
        <Text marginTop="10px">
          <em>
            UPDATE: How many addresses actively use the SUSHI token on Ethereum?
          </em>
        </Text>
      </Box>
      <Box marginTop="15px">
        <Text fontWeight="bold">Define metrics.</Text>
        <Text>
          What is “active“? What is “use”? These terms can (and will) mean
          different things to different people. It doesn’t matter what
          definition you use as long as you communicate your expectations.
          Alternately you can ask for the metric to be defined as part of the
          question.
        </Text>
        <Text marginTop="10px">
          <em>
            UPDATE: How many addresses have transferred SUSHI on Ethereum?
          </em>
        </Text>
      </Box>
      <Box marginTop="15px">
        <Text fontWeight="bold">Specify time frame.</Text>
        <Text>
          We still haven’t fully defined “active”. Specifying time makes the
          result easier to understand, don’t rely on the person answering the
          question to specify time for you if you didn’t ask them to.
        </Text>
        <Text marginTop="10px">
          <em>
            UPDATE: How many addresses have transferred SUSHI on Ethereum in the
            last 90 days?
          </em>
        </Text>
      </Box>
    </>
  );
};
