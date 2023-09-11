import React, { useContext, useEffect } from "react";
import { MemeContext } from "../../../context/MemeContext";
import ImageCaption from "./ImageCaption";
import ActiveImage from "./ActiveImage";
import NoImage from "./NoImage";
import presetData from "../preset.json";
import baseMeme1 from "../../../assets/images/baseMeme1.jpg";
import baseMeme2 from "../../../assets/images/baseMeme2.jpg";

const Preset = () => {
  const meme = useContext(MemeContext);

  const setPreset = (img, id) => {
    const newImage = {
      name: "dsfsdf",
      size: 2323,
      path: img,
    };
    meme.dispatch({ type: "IMAGE_SELECTED", payload: newImage });

    const selectedPreset = presetData.find((preset) => preset.id === id);

    if (selectedPreset) {
      meme.dispatch({ type: "UPDATE_TEXT1", payload: selectedPreset.text1 });
      meme.dispatch({ type: "UPDATE_TEXT2", payload: selectedPreset.text2 });
      meme.dispatch({ type: "UPDATE_TEXT3", payload: selectedPreset.text3 });
      meme.dispatch({ type: "UPDATE_TOP1", payload: selectedPreset.top1 });
      meme.dispatch({ type: "UPDATE_TOP2", payload: selectedPreset.top2 });
      meme.dispatch({ type: "UPDATE_TOP3", payload: selectedPreset.top3 });
      meme.dispatch({ type: "UPDATE_SIZE1", payload: selectedPreset.size1 });
      meme.dispatch({ type: "UPDATE_SIZE2", payload: selectedPreset.size2 });
      meme.dispatch({ type: "UPDATE_SIZE3", payload: selectedPreset.size3 });
      meme.dispatch({ type: "UPDATE_LEFT1", payload: selectedPreset.left1 });
      meme.dispatch({ type: "UPDATE_LEFT2", payload: selectedPreset.left2 });
      meme.dispatch({ type: "UPDATE_LEFT3", payload: selectedPreset.left3 });
    }
  };

  let label, caption;
  if (meme.state.imageSelected) {
    label = <ActiveImage />;
    caption = <ImageCaption />;
  } else {
    label = <NoImage>Upload an image from your computer</NoImage>;
  }

  return (
    <>
      <div>
        <img
          src={baseMeme1}
          style={{ width: "70px" }}
          onClick={() => setPreset(baseMeme1, 1)}
          alt="base meme 1"
        />
        <img
          src={baseMeme2}
          style={{ width: "70px" }}
          onClick={() => setPreset(baseMeme2, 2)}
          alt="base meme 2"
        />
      </div>
    </>
  );
};
export default Preset;
