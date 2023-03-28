import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postHistory } from "../redux/historyReducer/action";

const Card = ({ name, link }) => {
  const [playTime, setPlayTime] = useState(null);
  //  const [history, setHistory] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const playCard = () => {
    onOpen();
    const time = new Date().toLocaleString();
    setPlayTime(time);
    const history = { id: Date.now(), name: name, link: link, time };
    dispatch(postHistory(history));
    // setHistory(newHistory);
    console.log(playTime);
  };

  return (
    <Box
      border="1px solid grey"
      align="center"
      justifyContent="center"
      maxW={200}
      p="3"
    >
      <Text noOfLines={[1, 2, 3]} fontSize="xl" p="3px">
        {name}
      </Text>

      <video></video>
      <HStack spacing={3}>
        <Button onClick={playCard} size="xs">
          Play
        </Button>
        <Button size="xs">Edit</Button>
        <Button colorScheme="red" size="xs">
          Delete
        </Button>
      </HStack>
      {/* 
      modal for playing video onClick Play Button */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio maxW="640px" ratio={1}>
              <iframe src={link} title={name} />
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Card;
