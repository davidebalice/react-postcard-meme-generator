import React, { useContext } from "react";
import { MemeContext } from "../../../context/MemeContext";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
  id: "active-image",
})`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
`;

const Text = styled.pre`
  position: ${(props) => (props.outside ? "static" : "absolute")};
  left: 0;
  width: 100%;
  padding: ${(props) => (props.outside ? "0.25rem 1rem" : "0 1rem")};
  text-align: center;
  line-height: 1.2;
  color: ${(props) => props.color};
  font-weight: ${({ theme }) => theme.typography.bold};
  font-size: ${(props) => props.fsize}em;
  -webkit-text-stroke-width: ${(props) => props.border}px;
  -webkit-text-stroke-color: ${(props) => props.borderColor};
  text-align: ${(props) => props.alignText};
  top: ${(props) => props.topPlace}%;
  left: ${(props) => props.leftPlace}%;
`;

const Image = styled.img.attrs(({ path, altimg }) => ({
  src: path,
  alt: altimg,
}))`
  display: block;
  width: 100%;
`;

const ActiveImage = () => {
  const meme = useContext(MemeContext);
  const { useText } = meme.state;

  const textFields = [];

  for (let i = 1; i <= useText; i++) {
    textFields.push(`text${i}`);
  }

  const textComponents = textFields.map(
    (textField, index) =>
      meme.state.text[textField] && (
        <>
          {meme.state.text[textField] && (
            <Text
              key={index}
              topPlace={meme.state.top[`top${index + 1}`]}
              leftPlace={meme.state.left[`left${index + 1}`]}
              color={meme.state.color[`color${index + 1}`]}
              fsize={meme.state.size[`size${index + 1}`]}
              borderColor={meme.state.borderColor[`borderColor${index + 1}`]}
              border={meme.state.border[`border${index + 1}`]}
              alignText={meme.state.alignText[`alignText${index + 1}`]}
            >
              {meme.state.text[textField]}
            </Text>
          )}
        </>
      )
  );

  return (
    <Wrapper>
      {textComponents}
      <Image
        path={meme.state.imageSelected.path}
        altimg={meme.state.imageSelected.name}
      />
    </Wrapper>
  );
};

export default ActiveImage;
