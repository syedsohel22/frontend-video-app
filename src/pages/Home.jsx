import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      link,
    };
    console.log(data);

    //resting input after POST
    setLink("");
    setName("");
  };
  return (
    <Box
      w="40%"
      border="1px solid black"
      p={10}
      spacing={3}
      d="flex"
      alignItems="center"
    >
      <FormControl gap={8} isRequired>
        <FormLabel>Enter Card Details Here.!</FormLabel>
        <Input
          type="text"
          placeholder="Enter Your card Name Here"
          variant="outline"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="link"
          placeholder="Enter Your card Link Here"
          variant="outline"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <Button type="submit" onClick={handleSubmit}>
          Create
        </Button>
      </FormControl>
    </Box>
  );
};

export default Home;
