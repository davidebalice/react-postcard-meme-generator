import styled from "styled-components";

const ButtonUpload = styled.input.attrs({
  id: "up-img",
  type: "file",
  accept: "image/*",
})`
  top: 0;
  left: 0;
  position:absolute;
  width:100%;
  height:100%;
  z-index: 100;
  opacity: 0;
`;

export default ButtonUpload;
