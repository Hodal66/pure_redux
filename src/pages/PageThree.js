import React from "react";
import { useDispatch } from "react-redux";
import {
  changeFavColor,
  decrementCountAction,
  incrementCountAction,
} from "../redux/action";
// import {
//   changeFavColor,
//   decrementCountAction,
//   incrementCountAction,
// } from "../../../redux/action";
// decrementCountAction;
function PageThree() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>located on page three</h1>
      <h2>The redux interaction</h2>
      <button
        onClick={() => {
          dispatch(incrementCountAction());
        }}
      >
        increase count
      </button>
      <button
        onClick={() => {
          dispatch(decrementCountAction());
        }}
      >
        decrease count
      </button>
      <button
        onClick={() => {
          dispatch(changeFavColor("red"));
        }}
      >
        change favColor
      </button>
    </div>
  );
}

export default PageThree;
