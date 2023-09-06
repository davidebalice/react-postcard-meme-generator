import styled from "styled-components";

/**
 * Input component
 * @param {string} intype - the type to assign at the input HTML element
 */
const Input = styled.input.attrs((props) => ({
  type: props.intype,
}))`
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 1rem;
  color: #333;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  outline: none;
  transition: background 0.4s;
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default Input;
