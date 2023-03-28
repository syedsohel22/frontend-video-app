import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getCard } from "./../redux/userReducer/action";

const Bucket = () => {
  const state = useSelector((state) => {
    return state.userReducer.data;
  });
  console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);
  return (
    <SimpleGrid columns={5} spacing={10} w="80%" m="auto" marginTop={10}>
      {state.length > 0 &&
        state.map((el) => {
          return <Card key={el.id} {...el} />;
        })}
    </SimpleGrid>
  );
};

export default Bucket;
