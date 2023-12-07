import React, { createContext, useReducer } from "react";

const initialState = {
  useText: 2,
  text: {
    text1: "Make a meme\nwith Photoshop",
    text2: "Make a meme\nwith code",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
  },
  top: {
    top1: 18,
    top2: 70,
    top3: 35,
    top4: 50,
    top5: 65,
    top6: 70,
  },
  left: {
    left1: 26,
    left2: 26,
    left3: 2,
    left4: 2,
    left5: 2,
    left6: 2,
  },
  size: {
    size1: 1.6,
    size2: 1.6,
    size3: 1.2,
    size4: 1.2,
    size5: 1.2,
    size6: 1.2,
  },
  color: {
    color1: "#333333",
    color2: "#333333",
    color3: "#333333",
    color4: "#333333",
    color5: "#333333",
    color6: "#333333",
  },
  border: {
    border1: 0,
    border2: 0,
    border3: 0,
    border4: 0,
    border5: 0,
    border6: 0,
  },
  borderColor: {
    borderColor1: "#ffffff",
    borderColor2: "#ffffff",
    borderColor3: "#ffffff",
    borderColor4: "#ffffff",
    borderColor5: "#ffffff",
    borderColor6: "#ffffff",
  },
  textOutside: false,
  imageSelected: null,
};

const MemeContext = createContext(initialState);
const { Provider } = MemeContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "USE_TEXT":
        return {
          ...state,
          useText: action.payload,
        };
      case "UPDATE_TEXT":
        return {
          ...state,
          text: {
            ...state.text,
            [action.key]: action.payload,
          },
        };
      case "UPDATE_SIZE":
        return {
          ...state,
          size: {
            ...state.size,
            [action.key]: action.payload,
          },
        };
      case "UPDATE_TOP":
        return {
          ...state,
          top: {
            ...state.top,
            [action.key]: action.payload,
          },
        };
      case "UPDATE_LEFT":
        return {
          ...state,
          left: {
            ...state.left,
            [action.key]: action.payload,
          },
        };
      case "UPDATE_COLOR":
        return {
          ...state,
          color: {
            ...state.color,
            [action.key]: action.payload,
          },
        };
      case "UPDATE_BORDER":
        return {
          ...state,
          border: {
            ...state.border,
            [action.key]: action.payload,
          },
        };
      case "UPDATE_BORDER_COLOR":
        return {
          ...state,
          borderColor: {
            ...state.borderColor,
            [action.key]: action.payload,
          },
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
