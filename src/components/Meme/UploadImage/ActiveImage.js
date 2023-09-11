import React, { useContext } from "react";
import { MemeContext } from "../../../context/MemeContext";
import styled, { css } from "styled-components";

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
  font-weight: ${({ theme }) => theme.typography.bold};
  font-size: ${(props) => props.fsize}em;
  text-shadow: 0px 0px 5px #fff;
  ${(props) =>
    !props.outside &&
    props.pos === "top" &&
    css`
      top: ${(props) => props.topPlace}%;
      left: ${(props) => props.leftPlace}%;
    `}
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

  return (
    <Wrapper>
      {meme.state.text1 && (
        <Text
          pos="top"
          topPlace={meme.state.top1}
          leftPlace={meme.state.left1}
          fsize={meme.state.size1}
          outside={meme.state.textOutside}
        >
          {meme.state.text1}
        </Text>
      )}

      {meme.state.text2 && (
        <Text
          pos="top"
          topPlace={meme.state.top2}
          leftPlace={meme.state.left2}
          fsize={meme.state.size2}
          outside={meme.state.textOutside}
        >
          {meme.state.text2}
        </Text>
      )}
      {meme.state.text3 && (
        <Text
          pos="top"
          topPlace={meme.state.top3}
          leftPlace={meme.state.left3}
          fsize={meme.state.size3}
          outside={meme.state.textOutside}
        >
          {meme.state.text3}
        </Text>
      )}
      <Image
        path={meme.state.imageSelected.path}
        altimg={meme.state.imageSelected.name}
      />
    </Wrapper>
  );
};

export default ActiveImage;
