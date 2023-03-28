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
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postHistory } from "../redux/historyReducer/action";
import { deleteCard } from "../redux/userReducer/action";
import { getCard } from "./../redux/userReducer/action";

const Card = ({ name, link, id }) => {
  const [playTime, setPlayTime] = useState(null);
  const [change, setChange] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const playCard = () => {
    onOpen();
    const time = new Date().toLocaleString();
    setPlayTime(time);
    const history = { id: Date.now(), name: name, link: link, time };
    dispatch(postHistory(history));

    console.log(playTime);
  };

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
    setChange((p) => !p);
  };

  const handleEdit = (id) => {
    // const cardData = { name, link };
    // dispatch(patchCard(cardData, id));
    // setChange((p) => !p);
  };
  useEffect(() => {
    dispatch(getCard());
  }, [change, dispatch]);
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
        <Button size="xs" onClick={() => handleEdit(id)}>
          Edit
        </Button>
        <Button colorScheme="red" size="xs" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </HStack>
      {/* 
      modal for playing video onClick Play Button */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
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
