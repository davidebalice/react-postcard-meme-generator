import React, { useContext, useState, useEffect } from "react";
import { MemeContext } from "../../../context/MemeContext";
import presetMeme from "../presetMeme";
import presetPostcardFront from "../presetPostcardFront";
import presetPostcardRetro from "../presetPostcardRetro";
import styled from "styled-components";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import { BsCardImage, BsPostcard } from "react-icons/bs";

const Preset = () => {
  const meme = useContext(MemeContext);
  const [presetData, setPresetData] = useState(presetMeme);
  const [category, setCategory] = useState("meme");

  useEffect(() => {
    if (category === "meme") {
      setPresetData(presetMeme);
    } else if (category === "postcardFront") {
      setPresetData(presetPostcardFront);
    } else if (category === "postcardRetro") {
      setPresetData(presetPostcardRetro);
    }
  }, [category]);

  const setPreset = (img, id) => {
    const newImage = {
      name: "",
      size: 1000,
      path: img,
    };
    meme.dispatch({ type: "IMAGE_SELECTED", payload: newImage });

    const selectedPreset =
      presetData && presetData.find((preset) => preset.id === id);

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
        meme.dispatch({
          type: "UPDATE_BORDER",
          key: borderKey,
          payload: selectedPreset[borderKey],
        });

        let borderColorKey = `borderColor${i}`;
        if (selectedPreset[borderColorKey]) {
          meme.dispatch({
            type: "UPDATE_BORDER_COLOR",
            key: borderColorKey,
            payload: selectedPreset[borderColorKey],
          });
        }

        let alignTextKey = `alignText${i}`;
        meme.dispatch({
          type: "UPDATE_ALIGN",
          key: alignTextKey,
          payload: selectedPreset[alignTextKey],
        });

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

  const PresetButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 18px;
    background: #fff;
  `;

  const PresetContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 16px;
    padding-top: 0;
    background: #fff;
  `;

  const PresetImg = styled.img`
    width: 148px;
    height: 120px;
    border-radius: 6px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(80%);
    }
  `;

  const PresetCategoryButton = styled.div`
    display: flex;
    gap: 10px;
    font-size: 13px;
    background: #f1f1f1;
    flex-wrap: nowrap;
    padding: 8px 14px;
    border-radius: 16px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #d1d1d1;
    }
  `;

  return (
    <>
      <PresetButtonContainer>
        <PresetCategoryButton onClick={() => setCategory("meme")}>
          <FaRegFaceLaughSquint />
          Meme
        </PresetCategoryButton>
        <PresetCategoryButton onClick={() => setCategory("postcardFront")}>
          <BsCardImage />
          Postcard - front
        </PresetCategoryButton>
        <PresetCategoryButton onClick={() => setCategory("postcardRetro")}>
          <BsPostcard />
          Postcard - Retro
        </PresetCategoryButton>
      </PresetButtonContainer>
      <PresetContainer>
        {presetData &&
          presetData.map((preset) => (
            <PresetImg
              key={preset.id}
              src={preset.thumb}
              onClick={() => setPreset(preset.src, preset.id)}
              alt={`preset ${preset.id}`}
            />
          ))}
      </PresetContainer>
    </>
  );
};
export default Preset;
