import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: auto;
  min-height: 370px;
  padding: 0px;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, #e1e1e1, #f1f1f1);
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s, background 0.1s;
  border-radius: 8px;

  &:hover {
    background: linear-gradient(20deg, #d1d1d1, #e1e1e1);
  }

  @media (max-width: 768px) {
    color: black;
    width: 96%;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 30px;
  }
`;

export default Card;
