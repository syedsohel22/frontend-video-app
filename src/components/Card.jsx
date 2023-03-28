import { AspectRatio, Box, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ name, link }) => {
  return (
    <Box
      border="1px solid grey"
      align="center"
      justifyContent="center"
      maxW={200}
      p="3"
    >
      <Text noOfLines={[1, 2, 3]} fontSize="sm" p="3px">
        {name}
      </Text>

      <AspectRatio maxW="240px" ratio={1}>
        <iframe src={link} title={name} />
      </AspectRatio>
    </Box>
  );
};

export default Card;
