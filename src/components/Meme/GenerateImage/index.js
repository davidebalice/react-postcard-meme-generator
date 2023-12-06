import React, { useState, useContext } from "react";
import { MemeContext } from "../../../context/MemeContext";
import Button from "../../global/Button";
import Wrapper from "./Wrapper";


export const GenerateImage = ({generateMeme, resetMeme}) => {
  const meme = useContext(MemeContext);

  return (
    <Wrapper>
      <Button
        primary
        margin="0 1rem 1rem 0"
        handleClick={generateMeme}
        isDisabled={!meme.state.imageSelected}
      >
        Generate MEME
      </Button>

      <Button
        margin="0 1rem 1rem 0"
        handleClick={resetMeme}
        isDisabled={!meme.state.imageSelected}
      >
        Reset MEME settings
      </Button>
    </Wrapper>
  );
};

export default { GenerateImage };
