import React, { useContext } from "react";
import { MemeContext } from "../../../context/MemeContext";
import presetData from "../preset";
import styled from "styled-components";
import preset from "../preset";

const Preset = () => {
  const meme = useContext(MemeContext);

  const setPreset = (img, id) => {
    const newImage = {
      name: "",
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

        let colorKey = `color${i}`;
        if (selectedPreset[colorKey]) {
          meme.dispatch({
            type: "UPDATE_COLOR",
            key: colorKey,
            payload: selectedPreset[colorKey],
          });
        }

        let borderKey = `border${i}`;
        if (selectedPreset[borderKey]) {
          meme.dispatch({
            type: "UPDATE_BORDER",
            key: borderKey,
            payload: selectedPreset[borderKey],
          });
        }

        let borderColorKey = `borderColor${i}`;
        if (selectedPreset[borderColorKey]) {
          meme.dispatch({
            type: "UPDATE_BORDER_COLOR",
            key: borderColorKey,
            payload: selectedPreset[borderColorKey],
          });
        }

        let useTextKey = `useText`;
        if (selectedPreset[useTextKey]) {
          meme.dispatch({
            type: "USE_TEXT",
            key: useTextKey,
            payload: selectedPreset[useTextKey],
          });
        }
      }
    }
  };

  const PresetContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding-top: 10px;
  `;

  const PresetImg = styled.img`
    width: 121px;
    border-radius: 6px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(80%);
    }
  `;

  return (
    <>
      <PresetContainer>
        {preset &&
          preset.map((preset) => (
            <PresetImg
              key={preset.id}
              src={preset.src}
              onClick={() => setPreset(preset.src, preset.id)}
              alt={`preset ${preset.id}`}
            />
          ))}
      </PresetContainer>
    </>
  );
};
export default Preset;
