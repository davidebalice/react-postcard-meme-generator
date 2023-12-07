import React from "react";
import styled from "styled-components";
import { BiImage } from "react-icons/bi";

export const GenerateButton = ({generateMeme}) => {
  const StyledButton = styled.button`
  display: flex;
  min-width: 150px;
  align-items: center;
  gap: 10px;
  cursor:pointer;
  padding: 12px;
  font-size:13px;
  background: #f1f1f1;
  border: 1px solid #ddd;
  position: relative;
  &&:hover {
    background: #d1d1d1;
  }
`;

  return (
    <StyledButton onClick={generateMeme}>
      <BiImage />
      Generate MEME
    </StyledButton>
  );
};

export default { GenerateButton };
