import React, { useContext, useState } from "react";
import { MemeContext } from "../../../context/MemeContext";
import TextLegenda from "./TextLegenda";
import Title from "../../global/Title";
import WrapInput from "../../global/form/WrapInput";
import Label from "../../global/form/Label";
import Textarea from "../../global/form/Textarea";
import Range from "../../global/form/Range";
import Switch from "../../global/form/Switch";

const TextImage = () => {
  const meme = useContext(MemeContext);
  const [selectedColor1, setSelectedColor1] = useState("#ffffff"); // Inizializza con un colore predefinito

  const handleColorChange1 = (color) => {
    setSelectedColor1(color.hex); // Aggiorna lo stato con il colore selezionato
  };

  const handleText1 = (e) => {
    meme.dispatch({ type: "UPDATE_TEXT1", payload: e.target.value });
  };

  const handleText2 = (e) => {
    meme.dispatch({ type: "UPDATE_TEXT2", payload: e.target.value });
  };

  const handleText3 = (e) => {
    meme.dispatch({ type: "UPDATE_TEXT3", payload: e.target.value });
  };

  const handleColor1 = (e) => {
    meme.dispatch({ type: "SET_BGCOLOR", payload: e.target.value });
    meme.dispatch({ type: "SET_BG_TYPE", payload: "linear" });
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
    } else if (pos === "size3") {
      meme.dispatch({ type: "UPDATE_SIZE3", payload: e.target.value });
    }
  };

  const handleTextOutside = (e) => {
    meme.dispatch({ type: "TEXT_OUTSIDE" });
  };

  return (
    <section style={{ background: "#fff",padding:'18px' }}>
      <Title as="h4" fsize="1" margin="0 0 2rem">
        Add texts to image, regulate position and size, then generate a Meme
      </Title>

      <WrapInput>
        <Label primary htmlFor="text1" className="bold">
          Text 1
        </Label>
        <Textarea
          intype="textarea"
          id="text1"
          onChange={handleText1}
          value={meme.state.text1}
          disabled={!meme.state.imageSelected}
        />
      </WrapInput>

      <WrapInput flex>
        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="top1">
            Position top <span>[ {meme.state.top1} ]</span>
          </Label>
          <Range
            id="top1"
            min="0"
            max="100"
            value={meme.state.top1}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "top1")}
          />
        </div>

        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="top1">
            Position left <span>[ {meme.state.left1} ]</span>
          </Label>
          <Range
            id="left1"
            min="-100"
            max="100"
            value={meme.state.left1}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "left1")}
          />
        </div>

        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="size1">
            Text size <span>[ {meme.state.size1} ]</span>
          </Label>
          <Range
            id="size1"
            min="0.5"
            max="6"
            step="0.1"
            value={meme.state.size1}
            disabled={!meme.state.imageSelected}
            onChange={(e) => handleTextSize(e, "size1")}
          />
        </div>
      </WrapInput>

      <WrapInput flex>
        <input onChange={(e) => handleColor1(e)} type="color" value="#333" />
      </WrapInput>

      <WrapInput>
        <Label primary htmlFor="text2" className="bold">
          Text 2
        </Label>
        <Textarea
          intype="textarea"
          id="text2"
          onChange={handleText2}
          value={meme.state.text2}
          disabled={!meme.state.imageSelected}
        />
      </WrapInput>

      <WrapInput flex>
        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="top2">
            Position top <span>[ {meme.state.top2} ]</span>
          </Label>
          <Range
            id="top2"
            min="0"
            max="100"
            value={meme.state.top2}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "top2")}
          />
        </div>

        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="top2">
            Position left <span>[ {meme.state.top2} ]</span>
          </Label>
          <Range
            id="left2"
            min="-100"
            max="100"
            value={meme.state.left2}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "left2")}
          />
        </div>

        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="size2">
            Text size <span>[ {meme.state.size2} ]</span>
          </Label>
          <Range
            id="size2"
            min="0.5"
            max="6"
            step="0.1"
            value={meme.state.size2}
            disabled={!meme.state.imageSelected}
            onChange={(e) => handleTextSize(e, "size2")}
          />
        </div>
      </WrapInput>

      <WrapInput>
        <Label primary htmlFor="text3" className="bold">
          Text 3
        </Label>
        <Textarea
          intype="textarea"
          id="text3"
          onChange={handleText3}
          value={meme.state.text3}
          disabled={!meme.state.imageSelected}
        />
      </WrapInput>

      <WrapInput flex>
        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="top3">
            Position top <span>[ {meme.state.top3} ]</span>
          </Label>
          <Range
            id="top3"
            min="0"
            max="100"
            value={meme.state.top3}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "top3")}
          />
        </div>

        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="top3">
            Position left <span>[ {meme.state.top3} ]</span>
          </Label>
          <Range
            id="left3"
            min="-100"
            max="100"
            value={meme.state.left3}
            disabled={!meme.state.imageSelected || meme.state.textOutside}
            onChange={(e) => handleTextPos(e, "left3")}
          />
        </div>

        <div
          className={meme.state.textOutside ? "inactive textCol" : "textCol"}
        >
          <Label htmlFor="size3">
            Text size <span>[ {meme.state.size3} ]</span>
          </Label>
          <Range
            id="size3"
            min="0.5"
            max="6"
            step="0.1"
            value={meme.state.size3}
            disabled={!meme.state.imageSelected}
            onChange={(e) => handleTextSize(e, "size3")}
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
    </section>
  );
};

export default TextImage;
