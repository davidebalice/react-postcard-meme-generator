import styled from "styled-components";

/**
 * Input component
 * @param {string} intype - the type to assign at the input HTML element
 */
const Color = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px;
  color: #333;
  margin:0;
  background-color: ${props => props.value};
  border-radius: 4px;
  outline: none;
  border: none !important;
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    background-color:  ${props => props.value};
  }
`;

export default Color;


