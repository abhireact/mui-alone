import React from "react";
import { useLocation } from "react-router-dom";
const test = () => {
  const { state } = useLocation();
  console.log(state, "data ");

  return <div>{state.date}</div>;
};

export default test;
