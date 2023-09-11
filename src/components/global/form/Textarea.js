import styled from "styled-components";

/**
 * Textarea component
 * @param {string} intype - the type to assign at the input HTML element
 */
const Textarea = styled.textarea.attrs((props) => ({
  type: props.intype,
}))`
  width: 100%;
  height: 70px;
  line-height: 30px;
  padding: 0 1rem;
  color: #333;
  background-color: #f1f1f1;
  border: none;
  border-radius: 4px;
  outline: none;
  transition: background 0.4s;
  box-shadow: inset 0 0 11px rgba(0, 0, 0, 0.1); 
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default Textarea;
