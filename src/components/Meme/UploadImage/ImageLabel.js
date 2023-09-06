import styled from "styled-components";

const ImageLabel = styled.label.attrs({
  htmlFor: "up-img",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  min-height: ${({ active }) => (active ? "0px" : "450px")};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media all and (max-width: ${({ theme }) => theme.layout.xsWidth}) {
    min-height: ${({ active }) => (active ? "0px" : "300px")};
  }
`;

export default ImageLabel;
