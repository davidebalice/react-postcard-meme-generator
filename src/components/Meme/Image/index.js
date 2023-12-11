import React, { useContext, useEffect } from "react";
import { MemeContext } from "../../../context/MemeContext";
import ImageWrapper from "./ImageWrapper";
import ImageLabel from "./ImageLabel";
import ImageInput from "./ImageInput";
import ImageCaption from "./ImageCaption";
import ActiveImage from "./ActiveImage";
import NoImage from "./NoImage";
import baseMeme1 from "../../../assets/images/baseMeme1.jpg";

const UpdateImage = () => {
  const meme = useContext(MemeContext);

  useEffect(() => {
    const firstInput = document.getElementById("top1");
    if(firstInput){
      firstInput.focus();
      firstInput.select();
    }

    if (meme.state.imageSelected === null) {
      const newImage = {
        name: "",
        size: 100,
        path: baseMeme1,
      };
      meme.dispatch({ type: "IMAGE_SELECTED", payload: newImage });
    }
  }, [meme.state.imageSelected]);

  
  const handleLocalImage = (e) => {
    const img = e.target.files[0];
    const newImage = {
      name: img.name,
      size: img.size,
      path: URL.createObjectURL(img),
    };
    meme.dispatch({ type: "IMAGE_SELECTED", payload: newImage });
  };

  let label, caption;
  if (meme.state.imageSelected) {
    label = <ActiveImage />;
    caption = <ImageCaption />;
  } else {
    label = <NoImage>Upload an image from your computer</NoImage>;
  }

  return (
    <>
      <ImageWrapper>
        <ImageLabel active={meme.state.imageSelected !== null}>
          {label}
        </ImageLabel>
        <ImageInput onChange={handleLocalImage} />
        {caption}
      </ImageWrapper>
    </>
  );
};
export default UpdateImage;
