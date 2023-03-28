import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCard } from "../redux/userReducer/action";

const Home = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const state = useSelector((state) => {
    return state;
  });
  console.log(state);

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
      w="50%"
      border="1px solid black"
      p={10}
      spacing={3}
      d="flex"
      align={"center"}
      justify={"center"}
      m="auto"
    >
      <Stack>
        <FormControl gap={8} isRequired>
          <FormLabel>Enter Card Name </FormLabel>
          <Input
            type="text"
            placeholder="Enter Your card Name Here"
            variant="outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Enter Card Link </FormLabel>
          <Input
            type="link"
            placeholder="Enter Your card Link Here"
            variant="outline"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <Spacer></Spacer>
          <Button type="submit" onClick={handleSubmit}>
            Create
          </Button>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Home;
