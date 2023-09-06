import React, { useContext } from "react";
import { MemeContext } from "../../../context/MemeContext";
import TextWrapper from "./TextWrapper";
import TextLegenda from "./TextLegenda";
import Title from "../../global/Title";
import WrapInput from "../../global/form/WrapInput";
import Label from "../../global/form/Label";
import Input from "../../global/form/Input";
import Range from "../../global/form/Range";
import Switch from "../../global/form/Switch";

const TextImage = () => {
  const meme = useContext(MemeContext);

  const handleText1 = (e) => {
    meme.dispatch({ type: "UPDATE_TEXT1", payload: e.target.value });
  };

  const handleText2 = (e) => {
    meme.dispatch({ type: "UPDATE_TEXT2", payload: e.target.value });
  };

  const handleText3 = (e) => {
    meme.dispatch({ type: "UPDATE_TEXT3", payload: e.target.value });
  };

  const handleTextPos = (e, pos) => {
    if (pos === "top1") {
      meme.dispatch({ type: "UPDATE_TOP1", payload: e.target.value });
    } else if (pos === "left1") {
      meme.dispatch({ type: "UPDATE_LEFT1", payload: e.target.value });
    } else if (pos === "top2") {
      meme.dispatch({ type: "UPDATE_TOP2", payload: e.target.value });
    } else if (pos === "left2") {
      meme.dispatch({ type: "UPDATE_LEFT2", payload: e.target.value });
    } else if (pos === "top3") {
      meme.dispatch({ type: "UPDATE_TOP3", payload: e.target.value });
    } else if (pos === "left3") {
      meme.dispatch({ type: "UPDATE_LEFT3", payload: e.target.value });
    }
  };

  const handleTextSize = (e, pos) => {
    if (pos === "size1") {
      meme.dispatch({ type: "UPDATE_SIZE1", payload: e.target.value });
    } else if (pos === "size2") {
      meme.dispatch({ type: "UPDATE_SIZE2", payload: e.target.value });
    }
  };

  const handleTextOutside = (e) => {
    console.log(e.target.value);
    meme.dispatch({ type: "TEXT_OUTSIDE" });
  };

  // Render
  return (
    <TextWrapper className={meme.state.imageSelected ? "active" : ""}>
      <Title as="h3" fsize="1.4" margin="0 0 1rem">
        Add text to image, then generate a Meme
      </Title>

      <WrapInput>
        <Label primary htmlFor="text-top">
          Top text
        </Label>
        <Input
          intype="text"
          id="text-top"
          onChange={handleText1}
          value={meme.state.text1}
          disabled={!meme.state.imageSelected}
        />
      </WrapInput>

      <WrapInput flex>
        <div className={meme.state.textOutside ? "inactive" : ""}>
          <Label htmlFor="pos-top">
            Text position <span>[ {meme.state.top1} ]</span>
          </Label>
          <Range
            id="pos-top"
            min="0"
            max="100"
            value={meme.state.top1}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "top1")}
          />
          <Range
            id="pos-left"
            min="-100"
            max="100"
            value={meme.state.left1}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "left1")}
          />
        </div>
        <div>
          <Label htmlFor="size-top">
            Text size <span>[ {meme.state.size1} ]</span>
          </Label>
          <Range
            id="size-top"
            min="1"
            max="4"
            step="0.1"
            value={meme.state.size1}
            disabled={!meme.state.imageSelected}
            onChange={(e) => handleTextSize(e, "size1")}
          />
        </div>
      </WrapInput>

      <WrapInput>
        <Label primary htmlFor="text-bottom">
          Text 2
        </Label>
        <Input
          intype="text"
          id="text-bottom"
          onChange={handleText2}
          value={meme.state.text2}
          disabled={!meme.state.imageSelected}
        />
      </WrapInput>

      <WrapInput flex>
        <div className={meme.state.textOutside ? "inactive" : ""}>
          <Label htmlFor="pos-bottom">
            Text position <span>[ {meme.state.top2} ]</span>
          </Label>
          <Range
            id="pos-bottom"
            min="0"
            max="100"
            value={meme.state.top2}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "top2")}
          />
          <Range
            id="pos-left2"
            min="-100"
            max="100"
            value={meme.state.left2}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "left2")}
          />
        </div>

        <div>
          <Label htmlFor="size-bottom">
            Text size <span>[ {meme.state.size2} ]</span>
          </Label>
          <Range
            id="size-bottom"
            min="1"
            max="4"
            step="0.1"
            value={meme.state.size2}
            disabled={!meme.state.imageSelected}
            onChange={(e) => handleTextSize(e, "size2")}
          />
        </div>
      </WrapInput>

      <WrapInput>
        <Switch
          primary={true}
          label="Text outside the image"
          checked={meme.state.textOutside}
          disabled={!meme.state.imageSelected}
          onSwitch={handleTextOutside}
        />
      </WrapInput>

      <TextLegenda>* Both of the above texts are optional.</TextLegenda>
    </TextWrapper>
  );
};

export default TextImage;
