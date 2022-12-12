import { CHANGE_FAV_COLOR, DECREMENT_COUNT, INCREMENT_COUNT } from "./constant";

export const incrementCountAction = () => {
  return {
    type: INCREMENT_COUNT,
    payload: "",
  };
};

export const decrementCountAction = () => {
  return {
    type: DECREMENT_COUNT,
    payload: "",
  };
};

export const changeFavColor = (color) => {
  return {
    type: CHANGE_FAV_COLOR,
    payload: color,
  };
};

// export default { decrementCountAction, changeFavColor, incrementCountAction };
