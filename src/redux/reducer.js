import { CHANGE_FAV_COLOR, DECREMENT_COUNT, INCREMENT_COUNT } from "./constant";

const initialState = {
  count: 1,
  isBoy: true,
  favColor: "",
};
export const rootReducer = (state = initialState, action) => {
  if (action.type === DECREMENT_COUNT) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === INCREMENT_COUNT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === CHANGE_FAV_COLOR) {
    return { ...state, favColor: action.payload };
  } else {
    return state;
  }
};
