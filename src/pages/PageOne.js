import React from "react";
import { useSelector } from "react-redux";
import PageTwo from "./PageTwo";

function PageOne() {
  const countValue = useSelector((state) => {
    return state.count;
  });
  const favColor = useSelector((state) => {
    return state.favColor;
  });
  return (
    <div>
      <PageTwo />

      <h1>The value from the pageOne component.....</h1>
      <h3>count:{countValue} </h3>
      <h3>favColor: {favColor}</h3>
    </div>
  );
}

export default PageOne;
