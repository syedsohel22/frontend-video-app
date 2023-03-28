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
import React from "react";

const Card = ({ name, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      <video></video>
      <HStack spacing={3}>
        <Button onClick={onOpen} size="xs">
          Play
        </Button>
        <Button size="xs">Edit</Button>
        <Button colorScheme="red" size="xs">
          Delete
        </Button>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio maxW="640px" ratio={1}>
              <iframe src={link} title={name} sandbox />
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
