import React, { createContext, useReducer } from "react";

const initialState = {
  text1: "Lorem ipsum dolor sit amet",
  top1: 5,
  left1: 2,
  size1: 1.4,
  text2: "Consectetur adipiscing elit",
  top2: 20,
  left2: 2,
  size2: 1.4,
  text3: "Sed do eiusmod tempor incididunt",
  top3: 35,
  left3: 2,
  size3: 1.4,
  textOutside: false,
  imageSelected: null,
};

const MemeContext = createContext(initialState);
const { Provider } = MemeContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_TEXT1":
        return {
          ...state,
          text1: action.payload,
        };
      case "UPDATE_TEXT2":
        return {
          ...state,
          text2: action.payload,
        };
      case "UPDATE_TEXT3":
        return {
          ...state,
          text3: action.payload,
        };
      case "UPDATE_TOP1":
        return {
          ...state,
          top1: action.payload,
        };
      case "UPDATE_TOP2":
        return {
          ...state,
          top2: action.payload,
        };
      case "UPDATE_TOP3":
        return {
          ...state,
          top3: action.payload,
        };
      case "UPDATE_SIZE1":
        return {
          ...state,
          size1: action.payload,
        };
      case "UPDATE_SIZE2":
        return {
          ...state,
          size2: action.payload,
        };
      case "UPDATE_SIZE3":
        return {
          ...state,
          size3: action.payload,
        };
      case "UPDATE_LEFT1":
        return {
          ...state,
          left1: action.payload,
        };
      case "UPDATE_LEFT2":
        return {
          ...state,
          left2: action.payload,
        };
      case "UPDATE_LEFT3":
        return {
          ...state,
          left3: action.payload,
        };
      case "TEXT_OUTSIDE":
        return {
          ...state,
          textOutside: !state.textOutside,
        };
      case "IMAGE_SELECTED":
        return {
          ...state,
          imageSelected: action.payload,
        };
      case "RESET_MEME":
        return initialState;
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { MemeContext, StateProvider };
