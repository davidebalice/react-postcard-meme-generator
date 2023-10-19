import React, { useContext } from "react";
import { MemeContext } from "../../../context/MemeContext";
import ImageCaption from "./ImageCaption";
import ActiveImage from "./ActiveImage";
import NoImage from "./NoImage";
import presetData from "../preset.json";
import styled, { css } from "styled-components";
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
      for (let i = 1; i <= 6; i++) {
        let textKey = `text${i}`;
        if (selectedPreset[textKey]) {
          meme.dispatch({
            type: "UPDATE_TEXT",
            key: textKey,
            payload: selectedPreset[textKey],
          });
        }

        let topKey = `top${i}`;
        if (selectedPreset[topKey]) {
          meme.dispatch({
            type: "UPDATE_TOP",
            key: topKey,
            payload: selectedPreset[topKey],
          });
        }

        let leftKey = `left${i}`;
        if (selectedPreset[leftKey]) {
          meme.dispatch({
            type: "UPDATE_LEFT",
            key: leftKey,
            payload: selectedPreset[leftKey],
          });
        }

        let sizeKey = `size${i}`;
        if (selectedPreset[sizeKey]) {
          meme.dispatch({
            type: "UPDATE_SIZE",
            key: sizeKey,
            payload: selectedPreset[sizeKey],
          });
        }
      }
    }
  };

  let label, caption;
  if (meme.state.imageSelected) {
    label = <ActiveImage />;
    caption = <ImageCaption />;
  } else {
    label = <NoImage>Upload an image from your computer</NoImage>;
  }

  const PresetContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 10px;
  `;

  const PresetImg = styled.img`
    width: 110px;
    border-radius: 6px;
    border: 1px solid #ccc;
  `;

  return (
    <>
      <PresetContainer>
        <PresetImg
          src={baseMeme1}
          onClick={() => setPreset(baseMeme1, 1)}
          alt="base meme 1"
        />
        <PresetImg
          src={baseMeme2}
          onClick={() => setPreset(baseMeme2, 2)}
          alt="base meme 2"
        />
      </PresetContainer>
    </>
  );
};
export default Preset;
