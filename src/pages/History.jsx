import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../redux/historyReducer/action";

const History = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.historyReducer.history;
  });
  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);
  // console.log(state);
  let data = state.reverse();
  return (
    <div>
      {data.length > 0 &&
        data.map((el) => {
          return (
            <Box
              border="1px solid grey"
              key={el.id}
              w="90%"
              m="auto"
              mt={1}
              p={1}
            >
              <HStack>
                <Box>
                  <Text as="b"> {el.name}</Text>
                </Box>
                <Box>
                  <Text isTruncated>{el.link}</Text>
                </Box>
                <Box>
                  <Text as="b">Time:</Text>
                  {el.time}
                </Box>
              </HStack>
            </Box>
          );
        })}
    </div>
  );
};

export default History;
