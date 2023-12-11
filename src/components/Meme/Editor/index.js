import React, { useContext, useState } from "react";
import { MemeContext } from "../../../context/MemeContext";
import Title from "../../global/Title";
import WrapInput from "../../global/form/WrapInput";
import WrapSelect from "../../global/form/WrapSelect";
import Label from "../../global/form/Label";
import Color from "../../global/form/Color";
import Textarea from "../../global/form/Textarea";
import Range from "../../global/form/Range";
import Select from "../../global/form/Select";

const Editor = () => {
  const [selectedText, setSelectedText] = useState(1);
  const meme = useContext(MemeContext);
  const { imageSelected, textOutside, useText } = meme.state;

  const handleUseText = (e) => {
    setSelectedText(1);
    meme.dispatch({
      type: `USE_TEXT`,
      payload: e.target.value,
    });
  };

  const handleSelectText = (e) => {
    setSelectedText(e.target.value);
  };

  const handleColor = (e, numberKey) => {
    meme.dispatch({
      type: "UPDATE_COLOR",
      key: `color${numberKey}`,
      payload: e.target.value,
    });
  };

  const handleBorder = (e, numberKey) => {
    meme.dispatch({
      type: "UPDATE_BORDER",
      key: `border${numberKey}`,
      payload: e.target.value,
    });
  };

  const handleBorderColor = (e, numberKey) => {
    meme.dispatch({
      type: "UPDATE_BORDER_COLOR",
      key: `borderColor${numberKey}`,
      payload: e.target.value,
    });
  };

  const handleText = (e, numberKey) => {
    meme.dispatch({
      type: `UPDATE_TEXT`,
      key: `text${numberKey}`,
      payload: e.target.value,
    });
  };

  const handleAlign = (e, numberKey) => {
    meme.dispatch({
      type: `UPDATE_ALIGN`,
      key: `alignText${numberKey}`,
      payload: e.target.value,
    });
  };

  const handleTextPos = (e, pos) => {
    if (
      pos === "top1" ||
      pos === "top2" ||
      pos === "top3" ||
      pos === "top4" ||
      pos === "top5" ||
      pos === "top6"
    ) {
      meme.dispatch({ type: "UPDATE_TOP", key: pos, payload: e.target.value });
    } else if (
      pos === "left1" ||
      pos === "left2" ||
      pos === "left3" ||
      pos === "left4" ||
      pos === "left5" ||
      pos === "left6"
    ) {
      meme.dispatch({ type: "UPDATE_LEFT", key: pos, payload: e.target.value });
    }
  };

  const handleTextSize = (e, pos) => {
    meme.dispatch({ type: "UPDATE_SIZE", key: pos, payload: e.target.value });
  };

  const renderTextInputs = (numberKey) => (
    <>
      <WrapInput>
        <Label primary htmlFor={`text${numberKey}`} className="bold">
          Text {numberKey}
        </Label>
        <Textarea
          intype="textarea"
          id={`text${numberKey}`}
          onChange={(e) => handleText(e, numberKey, e.target.value)}
          value={meme.state.text[`text${numberKey}`]}
          disabled={!imageSelected}
        />
      </WrapInput>

      <WrapInput flex>
        <div className="textCol">
          <Label htmlFor={`top${numberKey}`}>
            Position top <span>[ {meme.state.top[`top${numberKey}`]} ]</span>
          </Label>
          <Range
            id={`top${numberKey}`}
            min="0"
            max="100"
            value={meme.state.top[`top${numberKey}`]}
            disabled={!imageSelected || textOutside}
            onChange={(e) => handleTextPos(e, `top${numberKey}`)}
          />
        </div>

        <div className="textCol">
          <Label htmlFor={`left${numberKey}`}>
            Position left <span>[ {meme.state.left[`left${numberKey}`]} ]</span>
          </Label>
          <Range
            id={`left${numberKey}`}
            min="-100"
            max="100"
            value={meme.state.left[`left${numberKey}`]}
            disabled={!imageSelected || textOutside}
            onChange={(e) => handleTextPos(e, `left${numberKey}`)}
          />
        </div>

        <div className="textCol">
          <Label htmlFor={`size${numberKey}`}>
            Text size <span>[ {meme.state.size[`size${numberKey}`]} ]</span>
          </Label>
          <Range
            id={`size${numberKey}`}
            min="0.5"
            max="6"
            step="0.1"
            value={meme.state.size[`size${numberKey}`]}
            disabled={!imageSelected}
            onChange={(e) => handleTextSize(e, `size${numberKey}`)}
          />
        </div>
      </WrapInput>

      <WrapInput flex>
        <div className="textCol">
          <Label>Text color</Label>
          <Color
            onChange={(e) => handleColor(e, numberKey)}
            type="color"
            value={meme.state.color[`color${numberKey}`]}
          />
        </div>

        <div className="textCol">
          <Label>Border</Label>
          <Select
            onChange={(e) => handleBorder(e, numberKey)}
            value={meme.state.border[`border${numberKey}`]}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Select>
        </div>

        <div className="textCol">
          <Label>Border color</Label>
          <Color
            onChange={(e) => handleBorderColor(e, numberKey)}
            type="color"
            value={meme.state.borderColor[`borderColor${numberKey}`]}
          />
        </div>
      </WrapInput>

      <WrapInput flex>
        <div className="textCol">
        <Label>Text align</Label>
          <Select
            onChange={(e) => handleAlign(e, numberKey)}
            value={meme.state.alignText[`alignText${numberKey}`]}
          >
            <option value="center">center</option>
            <option value="left">left</option>
            <option value="right">right</option>
          </Select>
        </div>
      </WrapInput>
    </>
  );

  const options = [];

  for (let i = 1; i <= 6; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const optionsTexts = [];

  for (let i = 1; i <= useText; i++) {
    optionsTexts.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <section style={{ background: "#fff", padding: "18px" }}>
      <Title as="h4" fsize="1" margin="0 0 2rem">
        Add texts to image, regulate position, size, color then generate a Meme
      </Title>

      <WrapSelect>
        <Label>Use text</Label>
        <Select onChange={handleUseText} value={useText}>
          {options}
        </Select>
        <Label>Select text</Label>
        <Select onChange={handleSelectText} value={selectedText}>
          {optionsTexts}
        </Select>
      </WrapSelect>

      {renderTextInputs(selectedText)}
    </section>
  );
};

export default Editor;
