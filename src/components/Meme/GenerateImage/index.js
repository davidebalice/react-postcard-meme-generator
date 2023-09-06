import React, { useState, useContext } from "react";
import { MemeContext } from "../../../context/MemeContext";
import { toPng } from "html-to-image";
import Button from "../../global/Button";
import Wrapper from "./Wrapper";
import Meme from "./Meme";

export const GenerateImage = () => {
  const meme = useContext(MemeContext);

  const [image, setImage] = useState(null);

  const generateMeme = () => {
    toPng(document.getElementById("active-image"))
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        img.crossOrigin = "anonymous";
        setImage(img.src);
      })
      .catch(function (error) {
        console.error("We have a problem:", error);
      });
  };

  const resetMeme = () => {
    meme.dispatch({ type: "RESET_MEME" });
  };

  const closeMeme = () => {
    setImage(null);
  };

  let memeImage;
  if (image) {
    memeImage = <Meme path={image} close={closeMeme} />;
  }
  return (
    <Wrapper>
      <Button
        primary
        margin="0 1rem 1rem 0"
        handleClick={generateMeme}
        isDisabled={!meme.state.imageSelected}
      >
        Generate a new MEME
      </Button>

      <Button
        margin="0 1rem 1rem 0"
        handleClick={resetMeme}
        isDisabled={!meme.state.imageSelected}
      >
        Reset MEME settings
      </Button>
      
      {memeImage}
    </Wrapper>
  );
};

export default GenerateImage;
