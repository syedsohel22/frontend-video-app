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
    <div>
      {state.length > 0 &&
        state.map((el) => {
          return <Card key={el.id} {...el} />;
        })}
    </div>
  );
};

export default Bucket;
