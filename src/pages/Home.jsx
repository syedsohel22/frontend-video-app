import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCard } from "../redux/userReducer/action";

const Home = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      link,
      id: Date.now(),
    };
    if (name.length > 0 && link.length > 0) {
      dispatch(postCard(data));
    } else {
      alert("please Enter Corret data");
    }
    console.log(data);

    //resting input after POST
    setLink("");
    setName("");
  };
  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Enter New Card Details.!
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Enter Card Name </FormLabel>
          <Input
            placeholder="Enter Card Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="link" isRequired>
          <FormLabel>Enter Card Link </FormLabel>
          <Input
            type="text"
            placeholder="Enter Card Name"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Home;
