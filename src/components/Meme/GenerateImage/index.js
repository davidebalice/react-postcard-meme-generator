import React, { useContext } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { MemeContext } from "../../../context/MemeContext";
import Button from "../../global/Button";
import Wrapper from "./Wrapper";
import { FaHome } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";
import { FaGear } from "react-icons/fa6";

export const GenerateImage = ({ generateMeme, resetMeme }) => {
  const meme = useContext(MemeContext);

  return (
    <>
      <Wrapper>
        <NavLink to="/">
          <Button
            primary
            handleClick={generateMeme}
            isDisabled={!meme.state.imageSelected}
          >
            <FaHome size={18}/>
            Home
          </Button>
        </NavLink>

        <Button
          primary
          handleClick={generateMeme}
          isDisabled={!meme.state.imageSelected}
        >
          <FaGear size={18} />
          Generate IMAGE
        </Button>

        <Button
          primary
          handleClick={resetMeme}
          isDisabled={!meme.state.imageSelected}
        >
          <MdRestartAlt size={24} />
          Reset settings
        </Button>
      </Wrapper>{" "}
    </>
  );
};

export default { GenerateImage };
