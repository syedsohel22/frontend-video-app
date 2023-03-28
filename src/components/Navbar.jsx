import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        border="1px solid black"
      >
        <HStack spacing={8} alignItems={"center"} w="80%">
          <Box>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="xl"
              fontWeight="extrabold"
              marginLeft={20}
            >
              Video App
            </Text>
          </Box>
          <Link to="/">Home</Link>
          <Link to="/bucket">Bucket</Link>
          <Link to="/history">History</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
