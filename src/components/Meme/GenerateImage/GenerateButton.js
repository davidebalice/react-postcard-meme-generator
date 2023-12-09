import React from "react";
import styled from "styled-components";
import { FaGear } from "react-icons/fa6";

export const GenerateButton = ({generateMeme}) => {
  const StyledButton = styled.button`
  display: flex;
  min-width: 150px;
  align-items: center;
  gap: 10px;
  cursor:pointer;
  padding: 12px;
  font-size:14px;
  background: #f1f1f1;
  border: 1px solid #ddd;
  position: relative;
  &&:hover {
    background: #d1d1d1;
  }
`;

  return (
    <StyledButton onClick={generateMeme}>
      <FaGear size={15} />
      Generate Image
    </StyledButton>
  );
};

export default { GenerateButton };